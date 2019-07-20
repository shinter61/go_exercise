import React from 'react';
import client from '../config/ApiClient';

export default class UserList extends React.Component {
  componentDidMount() {
    client.get('users')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <React.Fragment>
        <div>hello from user list</div>
      </React.Fragment>
    );
  }
}