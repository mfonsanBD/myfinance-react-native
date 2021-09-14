import React from "react";
import HC from './styles';

interface Props {
  title: string;
  color: string;
  amount: string;
}

export function HistoryCards({color, title, amount}:Props){
  return(
    <HC.Container color={color}>
      <HC.Title>{title}</HC.Title>
      <HC.Amount>{amount}</HC.Amount>
    </HC.Container>
  )
}