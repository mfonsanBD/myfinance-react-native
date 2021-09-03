import React from "react";
import style from "./styles";

interface Props {
  type: 'up' | 'down' | 'total';
  title: string;
  amount: string;
  lestTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export function HighlightCard({
  type,
  title, 
  amount, 
  lestTransaction
} : Props){
  return(
    <style.Container type={type}>
      <style.Header>
        <style.Title type={type}>{title}</style.Title>
        <style.ArrowUp name={icon[type]} type={type}/>
      </style.Header>
      <style.Footer>
        <style.Amount type={type}>{amount}</style.Amount>
        <style.LestTransaction type={type}>{lestTransaction}</style.LestTransaction>
      </style.Footer>
    </style.Container>
  )
}