import React from "react";
import { Platform } from "react-native";
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";

import theme from "../global/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarLabelPosition: "beside-icon",
      tabBarStyle: {
        padding: Platform.OS === 'ios' ? 20 : 0,
        height: 60,
      },
      tabBarLabelStyle: {
        fontFamily: theme.fonts.medium
      }
    }}>
      <Screen name="Listagem" component={Dashboard} options={{
        tabBarIcon: (({size, color})=>(
          <Feather name="list" size={size} color={color} />
        ))
      }} />
      <Screen name="Cadastrar" component={Register} options={{
        tabBarIcon: (({size, color})=>(
          <Feather name="dollar-sign" size={size} color={color} />
        ))
      }} />
      <Screen name="Resumo" component={Resume} options={{
        tabBarIcon: (({size, color})=>(
          <Feather name="pie-chart" size={size} color={color} />
        ))
      }} />
    </Navigator>
  )
}