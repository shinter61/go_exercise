import React from 'react'
import UserList from '../user_list/UserList'

export default class Admin extends React.Component {
  render() {
    return(
      <React.Fragment>
        <UserList />
      </React.Fragment>
    )
  }
}