import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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
    align-items: center;
  `,
  UserWrapper: styled.View`
    width: 100%;
    padding: 0 30px;
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
}