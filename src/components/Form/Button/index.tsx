import React from "react";
import { TouchableOpacityProps } from "react-native";
import B from './styles';

interface Props extends TouchableOpacityProps{
  title: string;
}

export function Button({title, ...rest}: Props){
  return(
    <B.Container {...rest}>
      <B.Title>{title}</B.Title>
    </B.Container>
  );
}