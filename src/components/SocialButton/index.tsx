import React from "react";
import SB from './styles';
import {RectButtonProps} from 'react-native-gesture-handler';
import { SvgProps } from "react-native-svg";

interface SocialButtonProps extends RectButtonProps{
  icon: React.FC<SvgProps>;
  title: string;
}

export function SocialButton({icon: Svg, title, ...rest}: SocialButtonProps){
  return(
    <SB.Container {...rest}>
      <SB.ImageContainer>
       <Svg />
      </SB.ImageContainer>
      <SB.Title>{title}</SB.Title>
    </SB.Container>
  )
}