import React from "react";
import CS from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({title, onPress}: Props){
  return(
    <CS.Container onPress={onPress}>
      <CS.Category>{title}</CS.Category>
      <CS.Icon name="chevron-down" />
    </CS.Container>
  );
}