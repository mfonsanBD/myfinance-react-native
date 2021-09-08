import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default {
  Container: styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
  })`
    width: 100%;
    padding: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.secondary};
  `,
  Title: styled.Text`
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(14)}px;
  `,
}