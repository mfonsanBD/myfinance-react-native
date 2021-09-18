import React, { useState } from "react";
import S from './styles';
import { RFValue } from "react-native-responsive-fontsize";

import { useAuth } from '../../hooks/auth';
import { useTheme } from "styled-components";

import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';
import Logo from '../../assets/logo.svg';
import { SocialButton } from "../../components/SocialButton";
import { ActivityIndicator, Alert, Platform } from "react-native";

export function SignIn(){
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle(){
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
      setIsLoading(false);
    }
  }
  async function handleSignInWithApple(){
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Apple');
      setIsLoading(false);
    }
  }

  return(
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <Logo width={RFValue(103)} height={RFValue(110)} />
          <S.Title>
            Controle suas{'\n'}
            finanças de forma{'\n'}
            muito simples
          </S.Title>
        </S.TitleWrapper>
      </S.Header>
      <S.Footer>
        <S.SignInTitle>
          Faça seu login com{'\n'}
          uma das contas abaixo
        </S.SignInTitle>
        <S.FooterWrapper>
          <SocialButton icon={Google} title="Entrar com Google" onPress={handleSignInWithGoogle}/>
          {Platform.OS === 'ios' &&
            <SocialButton icon={Apple} title="Entrar com Apple" onPress={handleSignInWithApple}/>
          }
        </S.FooterWrapper>
        {isLoading && 
          <ActivityIndicator 
            style={{marginTop:20}} 
            size="large" 
            color={theme.colors.shape}
          />
        }
      </S.Footer>
    </S.Container>
  )
}