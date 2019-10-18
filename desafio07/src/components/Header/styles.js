import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import logo from '../../assets/images/Logo.png';

export const Container = styled.View`
  background: #141419;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled(RectButton)`
  width: 24px;
  height: 24px;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CartItem = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
