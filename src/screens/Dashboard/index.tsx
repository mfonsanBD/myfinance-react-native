import React from "react";
import style from './styles';

export function Dashboard(){
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
    </style.Container>
  )
}