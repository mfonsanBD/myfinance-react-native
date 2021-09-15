import React, { useContext } from "react";
import S from './styles';
import { RFValue } from "react-native-responsive-fontsize";

import { useAuth } from '../../hooks/auth';

import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';
import Logo from '../../assets/logo.svg';
import { SocialButton } from "../../components/SocialButton";

export function SignIn(){
  const {user} = useAuth();
  console.log(user);

  return(
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <Logo width={RFValue(120)} height={RFValue(68)} />
          <S.Title>
            Controle suas{'\n'}
            finanças de forma{'\n'}
            muito simples
          </S.Title>
        </S.TitleWrapper>
        <S.SignInTitle>
          Faça seu login com{'\n'}
          uma das contas abaixo
        </S.SignInTitle>
      </S.Header>
      <S.Footer>
        <S.FooterWrapper>
          <SocialButton icon={Google} title="Entrar com Google"/>
          <SocialButton icon={Apple} title="Entrar com Apple"/>
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  )
}