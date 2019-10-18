import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import { Container, Logo, BasketContainer, CartItem } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icons name="shopping-basket" color="#fff" size={24} />
        <CartItem>{cartSize}</CartItem>
      </BasketContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
