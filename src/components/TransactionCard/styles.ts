import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
  type: 'positive' | 'negative';
}

export default {
  Container: styled.View`
    background-color: ${({theme})=>theme.colors.shape};
    border-radius: 7px;
    padding: 17px 24px;
    margin-bottom: 10px;
  `,
  Title: styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.regular};
  `,  
  Amount: styled.Text<TransactionProps>`
    font-size: ${RFValue(20)}px;
    color: ${({theme, type})=>
    type === 'positive' 
    ? theme.colors.success
    : theme.colors.attention};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  Footer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(19)}px;
  `,
  Category: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  CategoryIcon: styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.text};
  `,
  CategoryName: styled.Text`
    font-size: ${RFValue(14)}px;
    margin-left: 17px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  TransectionDate: styled.Text`
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
}