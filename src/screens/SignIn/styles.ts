import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export default{
  Container: styled.SafeAreaView`
    flex: 1;
  `,
  Header: styled.View`
    width: 100%;
    height: 70%;
    background-color: ${({theme})=>theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
  `,
  TitleWrapper: styled.View`
    align-items: center;
  `,
  Title: styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.shape};
    text-align: center;
    margin-top: 40px;
  `,
  SignInTitle: styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.shape};
    text-align: center;
    margin-top: 80px;
    margin-bottom: 65px;
  `,
  Footer: styled.View`
    width: 100%;
    height: 30%;
    background-color: ${({theme})=>theme.colors.secondary};
  `,
  FooterWrapper: styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;
    justify-content: space-between;
  `,
}