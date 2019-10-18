import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

export default function Home() {
  const [products, setProducts] = useState();

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;

      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function productLoad() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    productLoad();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
            <SubmitButton onPress={() => handleAddProduct(item.id)}>
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
