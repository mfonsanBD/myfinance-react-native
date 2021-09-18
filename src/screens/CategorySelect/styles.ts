import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

import { GestureHandlerRootView } from "react-native-gesture-handler";

interface CategoryProps{
  isActive: boolean;
}

export default {
  Container: styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
  `,
  Header: styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({theme})=>theme.colors.primary};
    padding-bottom: 19px;
    justify-content: flex-end;
    align-items: center;
  `,
  Title: styled.Text`
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  Category: styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
  })<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${({isActive, theme})=>
      isActive 
      ? theme.colors.secondary_light
      : theme.colors.background
    };
  `,
  Icon: styled(Feather)`
    margin-right: 16px;
    font-size: ${RFValue(20)}px;
  `,
  Name: styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `,
  Separator: styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({theme})=>theme.colors.text};
  `,
  Footer: styled.View`
    width: 100%;
    padding: 24px;
  `,
}