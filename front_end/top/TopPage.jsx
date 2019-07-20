import React from 'react';
import  { Link } from 'react-router-dom';

export default class Top extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='/users'>ユーザー管理ページ</Link></li>
      </ul>
    );
  }
}