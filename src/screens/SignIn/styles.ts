import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export default{
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme})=>theme.colors.primary};
  `,
  Header: styled.View`
    width: 100%;
    height: 60%;
    background-color: ${({theme})=>theme.colors.background};
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    border-bottom-right-radius: 150px;
  `,
  TitleWrapper: styled.View`
    align-items: center;
  `,
  Title: styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.title};
    text-align: center;
    margin-top: 40px;
    text-transform: uppercase;
  `,
  SignInTitle: styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.shape};
    text-align: center;
    margin-top: 40px;
    margin-bottom: 65px;
  `,
  Footer: styled.View`
    width: 100%;
    height: 40%;
    background-color: ${({theme})=>theme.colors.primary};
  `,
  FooterWrapper: styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;
    justify-content: space-between;
  `,
}