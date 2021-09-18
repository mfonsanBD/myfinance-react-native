import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from "../hooks/auth";

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(){
  const { user } = useAuth();
  return(
    <NavigationContainer>
      <StatusBar style={user.id ? 'light' : 'dark'} />
      {user.id ? <AppRoutes/> : <AuthRoutes/>}
    </NavigationContainer>
  )
}