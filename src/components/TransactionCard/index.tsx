import React from "react";
import { categories } from "../../utils/categories";
import style from "./styles";

export interface TransactionCardProps {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({data} : Props){
  const [ category ] = categories.filter(
    item => item.key === data.category
  );

  return(
    <style.Container>
      <style.Title>{data.name}</style.Title>
      <style.Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </style.Amount>
      <style.Footer>
        <style.Category>
          <style.CategoryIcon name={category.icon} />
          <style.CategoryName>{category.name}</style.CategoryName>
        </style.Category>
        <style.TransectionDate>{data.date}</style.TransectionDate>
      </style.Footer>
    </style.Container>
  )
}