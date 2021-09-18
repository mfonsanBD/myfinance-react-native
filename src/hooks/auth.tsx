import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';
import { useNavigation } from "@react-navigation/native";

interface AuthProps{
  children: ReactNode;
}

interface User{
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData{
  user: User;
  signInWithGoogle(): Promise<void>;
  signInWithApple(): Promise<void>;
  signOut(): Promise<void>;
  userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProps){
  const [user, setUser] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const userStorageKey = '@gofinances:user';

  async function signInWithGoogle(){
    try {
      const result = await Google.logInAsync({
        iosClientId: '865626280985-cvcfg3va29qrtgsmtld9aho1v5jfjc0u.apps.googleusercontent.com',
        androidClientId: '865626280985-el61ugeu9emv96r542beb4avpnidi01l.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      if(result.type === 'success'){
        const userLogged = {
          id: String(result.user.id),
          name: result.user.givenName!,
          email: result.user.email!,
          photo: result.user.photoUrl!
        };
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApple(){
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ]
      });
      if(credential){
        const name = credential.fullName!.givenName!;
        const photo = `https://ui-avatars.com/api/?name=${name}&length=1`
        const userLogged = {
          id: String(credential.user),
          name,
          email: credential.email!,
          photo
        };
        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut(){
    setUser({} as User);
    await AsyncStorage.removeItem(userStorageKey);
  }

  useEffect(()=>{
    async function loadUserStorageData(){
      const userStorage = await AsyncStorage.getItem(userStorageKey);

      if(userStorage){
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }
    loadUserStorageData();
  },[]);

  return(
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithApple, signOut, userStorageLoading }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}