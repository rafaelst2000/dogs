import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom' 

import Dogs from './pages/Dogs'


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dogs} />
      </Switch>
    </BrowserRouter>

  )
}