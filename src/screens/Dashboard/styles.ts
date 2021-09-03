import styled from "styled-components/native";
import { FlatList } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { DataListProps } from ".";

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
  `,
  Header: styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme})=>theme.colors.primary};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `,
  UserWrapper: styled.View`
    width: 100%;
    padding: 0 30px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  UserInfo: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Photo: styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 30px;
  `,
  User: styled.View`
    margin-left: 17px;
  `,
  UserGreeting: styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  UserName: styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.bold};
    margin-top: -10px;
  `,
  PowerIcon: styled(MaterialIcons)`
    color: ${({theme})=>theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `,
  HighlightCards: styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal:24}
  })`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
  `,
  Transactions: styled.View`
    flex: 1;
    padding: 0 30px;
    margin-top: ${RFPercentage(12)}px;
  `,
  Title: styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    margin-bottom: 16px;
  `,
  TransactionList: styled(
    FlatList as new () => FlatList<DataListProps>
  ).attrs({
    showsVerticalScrollIndicator: false
  })`
    margin-bottom: ${getStatusBarHeight()}px;
  `,
}