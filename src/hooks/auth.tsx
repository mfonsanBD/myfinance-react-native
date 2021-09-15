import React, { createContext, ReactNode, useContext } from "react";

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
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProps){
  const user = {
    id: '123456798',
    name: 'Mike Fonseca',
    email: 'mike@santos.com'
  }

  return(
    <AuthContext.Provider value={{
      user,
    }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth}