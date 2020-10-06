import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// import { createBrowserHistory } from 'history'

import Home from './Home'
import Repositories from './Repositories'
import Readme from './Readme';


const App = () => {
  const [ userId, setUserId ] = useState()
  
  // const history = createBrowserHistory()

  const onUserChange = (user) => {    
    setUserId(user)
    // history.push(user)
  }
  
  return (
    <Router>
        <Switch>
          <Route path="/:user/:repository">
            <Readme />
          </Route>
          <Route path="/:user">
            <Repositories />
          </Route>
          <Route exact path="/">
            <Home onChange = {onUserChange} />
          </Route>
        </Switch>
    </Router>
  );
}

export default App
