import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import style from './styles';

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){
  const data : DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas', 
        icon: 'dollar-sign'
      },
      date: "03/09/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação', 
        icon: 'coffee'
      },
      date: "02/09/2021",
    },
    {
      id: '3',
      type: 'negative',
      title: "Conta de Luz",
      amount: "R$ 200,00",
      category: {
        name: 'Casa', 
        icon: 'home'
      },
      date: "01/09/2021",
    },
  ];

  return(
    <style.Container>
      <style.Header>
        <style.UserWrapper>
          <style.UserInfo>
            <style.Photo source={{uri: 'https://avatars.githubusercontent.com/u/46286130?v=4'}} />
            <style.User>
              <style.UserGreeting>Olá,</style.UserGreeting>
              <style.UserName>Mike</style.UserName>
            </style.User>
          </style.UserInfo>
          <style.PowerIcon name="power-settings-new" />
        </style.UserWrapper>
      </style.Header>

      <style.HighlightCards>
        <HighlightCard 
          type="up"
          title="Entrada" 
          amount="R$ 17.400,00" 
          lestTransaction="Último dia 01 de Setembro"
        />
        <HighlightCard 
          type="down"
          title="Saida" 
          amount="R$ 6.400,00" 
          lestTransaction="Último dia 03 de Setembro"
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 11.000,00" 
          lestTransaction="de 01 - 30 de Setembro"
        />
      </style.HighlightCards>
    
      <style.Transactions>
        <style.Title>Listagem</style.Title>

        <style.TransactionList
          data={data}
          keyExtractor={item=>item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </style.Transactions>
    </style.Container>
  )
}