import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  flex-direction: row;
`;

export const ContainerList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const List = styled.View`
  margin: 20px 10px;
  background: #fff;
  border-radius: 4px;
  height: 358px;
  width: 220px;
`;

export const Image = styled.Image`
  margin: 10px;
`;

export const RefProd = styled.Text`
  flex: 1;
  font-size: 15px;
  color: #333;
  line-height: 21px;
  margin: 0 20px 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #000;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  flex-direction: row;
  border-radius: 4px;
  margin: 0 10px 10px;
  justify-content: space-between;
  align-items: center;
  height: 42px;
`;

export const InfoCount = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #5a479a;
  width: 53px;
  height: 42px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const IconCart = styled(Icons).attrs({
  name: 'shopping-cart',
  color: '#fff',
  size: 15,
})`
  margin-right: 5px;
`;

export const Count = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const AddProduct = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddProductText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;
