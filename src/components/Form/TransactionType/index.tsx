import React from "react";
import { TouchableOpacityProps } from "react-native";

import TT from './styles';

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

interface Props extends TouchableOpacityProps{
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionType({type, title, isActive, ...rest}: Props){
  return(
    <TT.Container {...rest} isActive={isActive} type={type}>
      <TT.Icon name={icons[type]} type={type}/>
      <TT.Title>{title}</TT.Title>
    </TT.Container>
  );
}