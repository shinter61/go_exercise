import React from 'react'
import UserList from './user_list/UserList'
import TopPage from './top/TopPage'
import Admin from './admin/Admin'
import Signin from './sign_in/Signin'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import client from '../config/ApiClient'
import './reset.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false
    }
  }

  componentDidMount = () => {
    client.get()
  }

  handleAuth = () => {
    this.setState({ isAuthenticated: true })
  }

  render() {
    console.log(this.state.isAuthenticated)
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/sign_in' render={() => <Signin handleAuth={this.handleAuth} />} />
          <Route exact path='/' component={TopPage} />
          <Route exact path='/top' component={TopPage} />
          {
            this.state.isAuthenticated
              ?
              <Switch>
                <Route exact path='/users' component={UserList} />
                <Route path='/admin' component={Admin} />
              </Switch>
              :
              <Redirect to='/sign_in' />
          }
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App