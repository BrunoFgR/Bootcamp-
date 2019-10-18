import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Logo, BasketContainer, CartItem } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
