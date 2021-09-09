import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import D from './styles';

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
    <D.Container>
      <D.Header>
        <D.UserWrapper>
          <D.UserInfo>
            <D.Photo source={{uri: 'https://avatars.githubusercontent.com/u/46286130?v=4'}} />
            <D.User>
              <D.UserGreeting>Olá,</D.UserGreeting>
              <D.UserName>Mike</D.UserName>
            </D.User>
          </D.UserInfo>

          <D.LogoutButton onPress={()=>{}}>
            <D.PowerIcon name="power-settings-new" />
          </D.LogoutButton>
        </D.UserWrapper>
      </D.Header>

      <D.HighlightCards>
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
      </D.HighlightCards>
    
      <D.Transactions>
        <D.Title>Listagem</D.Title>

        <D.TransactionList
          data={data}
          keyExtractor={item=>item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </D.Transactions>
    </D.Container>
  )
}