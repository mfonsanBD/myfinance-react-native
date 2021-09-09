import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import TT from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

interface Props extends RectButtonProps{
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionType({type, title, isActive, ...rest}: Props){
  return(
    <TT.Container isActive={isActive} type={type}>
      <TT.Button {...rest}>
        <TT.Icon name={icons[type]} type={type}/>
        <TT.Title>{title}</TT.Title>
      </TT.Button>
    </TT.Container>
  );
}