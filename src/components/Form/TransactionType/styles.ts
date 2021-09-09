import styled, {css} from "styled-components/native";
import { RectButton } from "react-native-gesture-handler"; 
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export default {
  Container: styled.View<ContainerProps>`
    width: 48%;
    border: ${({isActive}) => isActive ? 0 : 1.5}px solid ${({theme})=>theme.colors.text};
    border-radius: 5px;

    ${({isActive, type}) => isActive && type === 'up' && css`
      background-color: ${({theme}) => theme.colors.success_light};
    `}

    ${({isActive, type}) => isActive && type === 'down' && css`
      background-color: ${({theme}) => theme.colors.attention_light};
    `}
  `,
  Button: styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
  `,
  Icon: styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({theme, type})=>
      type === 'up'
      ? theme.colors.success
      : theme.colors.attention
    }
  `,
  Title: styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.title};
  `,
}