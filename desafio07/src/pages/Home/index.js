import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
  Container,
  ContainerList,
  List,
  Image,
  RefProd,
  Price,
  SubmitButton,
  InfoCount,
  IconCart,
  Count,
  AddProduct,
  AddProductText,
} from './styles';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.object.isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ContainerList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <List>
              <Image
                source={{ uri: item.image }}
                style={{ height: 200, width: 200 }}
              />
              <RefProd>{item.title}</RefProd>
              <Price>{item.priceFormatted}</Price>
              <SubmitButton onPress={() => this.handleAddProduct(item.id)}>
                <InfoCount>
                  <IconCart />
                  <Count>{amount[item.id] || 0}</Count>
                </InfoCount>
                <AddProduct>
                  <AddProductText>Adicionar</AddProductText>
                </AddProduct>
              </SubmitButton>
            </List>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
