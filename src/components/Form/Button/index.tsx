import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import B from './styles';

interface Props extends RectButtonProps{
  title: string;
  onPress: () => void;
}

export function Button({title, onPress, ...rest}: Props){
  return(
    <B.Container onPress={onPress} {...rest}>
      <B.Title>{title}</B.Title>
    </B.Container>
  );
}