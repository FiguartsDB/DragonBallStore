import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import Home from '@pages/Home';
import Login from '@pages/Login'
import Singup from '@pages/Singup'
import Layout from './Layout';
import AuthComponent from './Authenticate'
import NotFound from './NotFound';

import Dashboard from './Protected'

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
          <AuthComponent>
            <Route path='/dashboard' component={Dashboard}/>
          </AuthComponent>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </UserContextProvider>
  </Router>
)

export default App
