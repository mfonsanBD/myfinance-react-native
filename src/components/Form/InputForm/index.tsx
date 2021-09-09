import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import IF from './styles';

interface Props extends TextInputProps{
  control: Control
  name: string;
  error: string;
}

export function InputForm({control, name, error, ...rest}: Props){
  return(
    <IF.Container>
      <Controller
        control={control}
        render={({field: {onChange, value}})=>(
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <IF.Error>{error}</IF.Error>}
    </IF.Container>
  )
}