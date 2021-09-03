import React from "react";
import style from "./styles";

interface Category {
  name: string
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data} : Props){
  return(
    <style.Container>
      <style.Title>{data.title}</style.Title>
      <style.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </style.Amount>
      <style.Footer>
        <style.Category>
          <style.CategoryIcon name={data.category.icon} />
          <style.CategoryName>{data.category.name}</style.CategoryName>
        </style.Category>
        <style.TransectionDate>{data.date}</style.TransectionDate>
      </style.Footer>
    </style.Container>
  )
}