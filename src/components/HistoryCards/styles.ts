import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ContainerProps{
  color: string;
}

export default{
  Container: styled.View<ContainerProps>`
    width: 100%;
    background-color: ${({theme})=>theme.colors.shape};
    padding: 16px 18px;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-left-width: 5px;
    border-left-color: ${({color})=>color};
    margin-bottom: 8px;
  `,
  Title: styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    margin-left: 10px;
  `,
  Amount: styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: ${RFValue(15)}px;
  `,
}