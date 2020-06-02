import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Home from '@pages/Home';
import Login from '@pages/Login'
import Singup from '@pages/Singup'
import Layout from './Layout';
import NotFound from './NotFound';

//Context
import {UserContextProvider} from '../context/userContext'

const App = () => (
  <Router>
    <UserContextProvider>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/singup' component={Singup} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </UserContextProvider>
  </Router>
)

export default App
