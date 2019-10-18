import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const dispatch = useDispatch();

  function inclement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function declement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                  <DefaultButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
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
