import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ContainerProduct,
  Product,
  InfoProduct,
  ImageProd,
  RefProd,
  RefProdText,
  RefProdPrice,
  RemoveCircle,
  Count,
  CountText,
  AddCircle,
  Footer,
  Total,
  TotalPrice,
  SubmitButton,
  SubmitButtonText,
  DefaultButton,
  Delete,
  ContainerCount,
  CountPrice,
  CountPriceText,
  CountCont,
  ListProduct,
  EmptyProduct,
  EmptyProductText,
} from './styles';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function inclement(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }
  function declement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <ContainerProduct>
          <ListProduct
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Product>
                <InfoProduct>
                  <ImageProd
                    source={{
                      uri: item.image,
                    }}
                  />
                  <RefProd>
                    <RefProdText>{item.title}</RefProdText>
                    <RefProdPrice>{item.priceFormatted}</RefProdPrice>
                  </RefProd>
                  <DefaultButton onPress={() => removeFromCart(item.id)}>
                    <Delete />
                  </DefaultButton>
                </InfoProduct>
                <ContainerCount>
                  <CountCont>
                    <DefaultButton onPress={() => declement(item)}>
                      <RemoveCircle />
                    </DefaultButton>
                    <Count>
                      <CountText>{item.amount}</CountText>
                    </Count>
                    <DefaultButton onPress={() => inclement(item)}>
                      <AddCircle />
                    </DefaultButton>
                  </CountCont>
                  <CountPrice>
                    <CountPriceText>{item.subtotal}</CountPriceText>
                  </CountPrice>
                </ContainerCount>
              </Product>
            )}
          />

          <Footer>
            <Total>Total</Total>
            <TotalPrice>{total}</TotalPrice>
            <SubmitButton>
              <SubmitButtonText>Finalizar Pedido</SubmitButtonText>
            </SubmitButton>
          </Footer>
        </ContainerProduct>
      ) : (
        <EmptyProduct>
          <EmptyProductText>Seu carrinho esta vazio</EmptyProductText>
        </EmptyProduct>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
