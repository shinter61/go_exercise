import React from 'react'
import  { Link } from 'react-router-dom'
import './TopPage.scss'

export default class Top extends React.Component {
  render() {
    return (
      <div className='top_page'>
        <div className='top__header'>
          <div className='title'>ストフレ！</div>
          <ul>
            <li><Link to='/users'>ユーザー管理ページ</Link></li>
          </ul>
        </div>
        <div className='top__ranking__body'>
        </div>
      </div>
    )
  }
}