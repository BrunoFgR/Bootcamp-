import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #141419;
  flex: 1;
`;

export const ContainerProduct = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-top: 20px;
  border-radius: 4px;
`;

export const ListProduct = styled.FlatList``;

export const Product = styled.View`
  margin: 20px 15px 0;
`;

export const InfoProduct = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageProd = styled.Image`
  height: 64px;
  width: 64px;
  margin-right: 5px;
`;

export const RefProd = styled.View`
  width: 163px;
  margin-right: 28px;
`;

export const RefProdText = styled.Text`
  font-size: 14px;
  color: #333;
  line-height: 18px;
  margin-bottom: 3px;
`;

export const RefProdPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const DefaultButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;
`;

export const Delete = styled(Icons).attrs({
  name: 'delete-forever',
  color: '#7159c1',
  size: 20,
})``;

export const CountCont = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const RemoveCircle = styled(Icons).attrs({
  name: 'remove-circle-outline',
  color: '#7159c1',
  size: 20,
})`
  margin: 10px 0 10px 10px;
  margin-right: 5px;
`;

export const Count = styled.View`
  width: 51px;
`;

export const CountText = styled.Text`
  font-size: 14px;
  color: #666;
  padding: 5px;
  padding-left: 12px;
`;

export const AddCircle = styled(Icons).attrs({
  name: 'add-circle-outline',
  color: '#7159c1',
  size: 20,
})``;

export const Footer = styled.View`
  align-items: center;
`;

export const Total = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

export const SubmitButton = styled(RectButton)`
  height: 42px;
  width: 300px;
  border-radius: 4px;
  background: #7159c1;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const ContainerCount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;

export const CountPrice = styled.View``;

export const CountPriceText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  padding: 10px;
`;

export const EmptyProduct = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-top: 20px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const EmptyProductText = styled.Text`
  margin-top: 120px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
