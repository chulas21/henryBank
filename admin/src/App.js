import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import Form from './components/Form/Form'
import Login from './components/Login/Login'
import User from './components/User/User'
import NavBar from './components/NavBar/NavBar'


const App = () => {

  return (

    <BrowserRouter>
      <Route
        path='/'
        render={() => <NavBar />} />
      <Switch>
        <Route
          exact path='/'
          component={Blog}
        />
        <Route 
          exact path='/login'
          component={Login}
        />
        <Route 
          exact path='/user'
          component = {User}
        /> 
        <Route
          exact path='/form'
          render={(match) => <Form userId={match} />} />
      </Switch>

    </BrowserRouter>
  )
}

export default App

