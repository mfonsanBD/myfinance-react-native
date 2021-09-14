import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

import { useFocusEffect } from "@react-navigation/core";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import D from './styles';

function getLastTransactionDate(
  collection: DataListProps[], 
  type: 'positive' | 'negative'
){
  const lastTransaction = new Date (Math.max.apply(Math, collection
  .filter(transaction => transaction.type === type)
  .map(transaction => new Date(transaction.date).getTime())));
    
  return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR', { month: "long" })}`;
}

export interface DataListProps extends TransactionCardProps{
  id: string;
}

interface HighlightProps{
  amount: string;
  lastTransaction: string;
}

interface HighlightData{
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

export function Dashboard(){
  const [isLoading, setIsLoading] = useState(true);
  const [transaction, setTransaction] = useState<DataListProps[]>([]);
  const [highlight, setHighlight] = useState<HighlightData>({} as HighlightData);

  const theme = useTheme();

  async function loadTransactions(){
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions
    .map((item: DataListProps)=>{

      if(item.type === 'positive'){
        entriesTotal += Number(item.amount);
      }
      else{
        expensiveTotal += Number(item.amount);
      }

      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
      
      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(new Date(item.date));

      return{
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      }

    });

    setTransaction(transactionsFormatted);

    const lastTransactionEntries = getLastTransactionDate(transactions, 'positive');
    const lastTransactionExpensives = getLastTransactionDate(transactions, 'negative');
    const totalInterval = `01 à ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;
    setHighlight({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        }),
        lastTransaction: `Última entrada dia ${lastTransactionEntries}`,
      },
      expensives:{
        amount: expensiveTotal.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        }),
        lastTransaction: `Última saída dia ${lastTransactionExpensives}`,
      },
      total:{
        amount: total.toLocaleString('pt-BR', {
          style: 'currency', currency: 'BRL'
        }),
        lastTransaction: totalInterval,
      }
    });

    setIsLoading(false);
  }

  useEffect(()=>{
    loadTransactions();
  },[]);

  useFocusEffect(useCallback(()=>{
    loadTransactions();
  }, []));

  return(
    <D.Container>
      {
      isLoading ?
      <D.LoadingContainer>
        <ActivityIndicator color={theme.colors.secondary} size="large"/>
      </D.LoadingContainer>
      :
      <>
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
            amount={highlight.entries.amount}
            lestTransaction={highlight.entries.lastTransaction}
          />
          <HighlightCard 
            type="down"
            title="Saida" 
            amount={highlight.expensives.amount}
            lestTransaction={highlight.expensives.lastTransaction}
          />
          <HighlightCard 
            type="total"
            title="Total" 
            amount={highlight.total.amount}
            lestTransaction={highlight.total.lastTransaction}
          />
        </D.HighlightCards>
      
        <D.Transactions>
          <D.Title>Listagem</D.Title>

          <D.TransactionList
            data={transaction}
            keyExtractor={item=>item.id}
            renderItem={({item}) => <TransactionCard data={item} />}
          />
        </D.Transactions>
      </>
      }
    </D.Container>
  )
}