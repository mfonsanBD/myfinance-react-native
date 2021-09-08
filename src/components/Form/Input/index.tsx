import React from "react";
import { TextInputProps } from "react-native";
import I from './styles';

type Props = TextInputProps;

export function Input({...rest} : Props){
  return(
    <I.Container {...rest} />
  )
}