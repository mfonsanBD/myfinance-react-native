import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export default{
  Container: styled(RectButton)`
    width: 100%;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,
  ImageContainer: styled.View`
    height: 100%;
    padding: ${RFValue(16)}px;
    border-color: ${({theme})=>theme.colors.background};
    border-right-width: 1px;
  `,
  Title: styled.Text`
    flex: 1;
    text-align: center;
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(14)}px;
  `,
}