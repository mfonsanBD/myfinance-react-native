import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export default {
  Container: styled(RectButton).attrs({
    activeOpacity: 0.7
  })`
    width: 100%;
    padding: 18px 16px;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Category: styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `,
  Icon: styled(Feather)`
    color: ${({theme})=>theme.colors.text};
    font-size: ${RFValue(20)}px;
  `,
}