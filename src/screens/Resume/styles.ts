import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

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
  Content: styled.ScrollView`
    flex: 1;
  `,
  ChartContainer: styled.View`
    width: 100%;
    align-items: center;
  `,
  MonthSelect: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  `,
  MonthSelectButton: styled(BorderlessButton)``,
  MonthSelectIcon: styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({theme})=>theme.colors.title};
  `,
  Month: styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.title};
    font-family: ${({theme})=>theme.fonts.regular};
  `,
  LoadingContainer: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
}