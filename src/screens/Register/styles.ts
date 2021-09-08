import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
  `,
  Header: styled.View`
    width: 100%;
    padding-bottom: 19px;
    height: ${RFValue(113)}px;
    background-color: ${({theme})=>theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
  `,
  Title: styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  Form: styled.View`
    flex: 1;
    width: 100%;
    padding: 24px;
    justify-content: space-between;
  `,
  Fields: styled.View``,
  Transaction: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 16px;
  `,
}