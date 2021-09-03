import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export default {
  Container: styled.View<TypeProps>`
    background-color: ${({theme, type})=>
      type === 'total' 
      ? theme.colors.secondary
      : theme.colors.shape
    };
    width: ${RFValue(300)}px;
    border-radius: 7px;
    padding: 19px 23px ${RFValue(42)}px;
    margin: 0 8px;
  `,
  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
  `,
  Title: styled.Text<TypeProps>`
    font-family: ${({theme})=>theme.fonts.regular};
    
    color: ${({theme, type})=>
      type === 'total' ? theme.colors.shape : theme.colors.title
    };
    font-size: ${RFValue(14)}px;
  `,
  ArrowUp: styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;

    ${({type})=>type === 'up' && css`
      color: ${({theme})=>theme.colors.success};
    `}
    
    ${({type})=>type === 'down' && css`
      color: ${({theme})=>theme.colors.attention};
    `}
    
    ${({type})=>type === 'total' && css`
      color: ${({theme})=>theme.colors.shape};
    `}
  `,
  Footer: styled.View``,
  Amount: styled.Text<TypeProps>`
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme, type})=>
      type === 'total' ? theme.colors.shape : theme.colors.title
    };
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
  `,
  LestTransaction: styled.Text<TypeProps>`
    font-family: ${({theme})=>theme.fonts.regular};
    color: ${({theme, type})=>
      type === 'total' ? theme.colors.shape : theme.colors.text
    };
    font-size: ${RFValue(12)}px;
    margin-top: -12px;
  `,
}