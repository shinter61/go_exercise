import React from 'react'
import UserList from './user_list/UserList'
import TopPage from './top/TopPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './reset.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={TopPage} />
          <Route exact path='/top' component={TopPage} />
          <Route exact path='/users' component={UserList} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App