import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { HistoryCards } from "../../components/HistoryCards";
import { categories } from "../../utils/categories";
import { VictoryPie} from 'victory-native';
import R from "./styles";
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryProps{
  key: string;
  name: string;
  total: string;
  color: string;
  percentFormatted: string;
  percent: number;
}

export function Resume(){
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoryList, setCategoryList] = useState<CategoryProps[]>([]);
  const theme = useTheme();

  function handleDateChange(action: 'next' | 'prev'){
    setIsLoading(true);
    if(action === 'next'){
      setSelectedDate(addMonths(selectedDate, 1));
    }
    else{
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData(){
    setIsLoading(true);
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];
    
    const expensives = responseFormatted
    .filter((expensive:TransactionData) => 
      expensive.type === 'negative' &&
      new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
      new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    const expensiveTotal = expensives
    .reduce((accumulator: number, expensive: TransactionData)=>{
      return accumulator + Number(expensive.amount);
    }, 0);

    const totalByCategory: CategoryProps[] = [];
    categories.forEach(category => {
      let categorySum = 0;
      expensives.forEach((expensive:TransactionData) => {
        if(expensive.category === category.key){
          categorySum += Number(expensive.amount);
        }
      });

      if(categorySum > 0){
        const total = categorySum
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });

        const percent = (categorySum/expensiveTotal*100);
        const percentFormatted = `${percent.toFixed(0)}%`;

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total,
          percentFormatted,
          percent,
        })
      }
    });

    setCategoryList(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(useCallback(()=>{
    loadData();
  }, [selectedDate]));

  return(
    <R.Container>
        <R.Header>
          <R.Title>Resumo por Categoria</R.Title>
        </R.Header>
    {
      isLoading 
    ?
      <R.LoadingContainer>
        <ActivityIndicator color={theme.colors.secondary} size="large"/>
      </R.LoadingContainer>
    :
      <R.Content 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: useBottomTabBarHeight(), 
          paddingHorizontal: 20
        }}
      >
        <R.MonthSelect>
          <R.MonthSelectButton onPress={()=>handleDateChange('prev')}>
            <R.MonthSelectIcon name="chevron-left" />
          </R.MonthSelectButton>

          <R.Month>
            { format( selectedDate, 'MMMM, yyyy', {locale: ptBR} ) }
          </R.Month>

          <R.MonthSelectButton onPress={()=>handleDateChange('next')}>
            <R.MonthSelectIcon name="chevron-right" />
          </R.MonthSelectButton>
        </R.MonthSelect>

        <R.ChartContainer>
          <VictoryPie 
            data={categoryList} 
            x="percentFormatted" 
            y="percent" 
            colorScale={categoryList.map(category => category.color)}
            style={{
              labels:{
                fontSize: RFValue(18), 
                fontWeight: 'bold',
                fill: theme.colors.shape,
              }
            }}
            labelRadius={60}
          />
        </R.ChartContainer>

        {categoryList.map(category => (
          <HistoryCards
            key={category.key}
            title={category.name}
            amount={category.total}
            color={category.color}
          />
        ))}
      </R.Content>
    }
    </R.Container>
  )
}