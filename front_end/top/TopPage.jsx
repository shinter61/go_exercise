import React from 'react'
import  { Link } from 'react-router-dom'
import './TopPage.scss'

export default class Top extends React.Component {
  render() {
    return (
      <div className='top_page'>
        <div className='top__background__image'>
          <div className='top__header'>
            <div className='title'>ストフレ！</div>
            <ul>
              <li><Link to='/users'>login</Link></li>
              <li><Link to='/users'>admin</Link></li>
            </ul>
          </div>
          <div className='top__declare'>
            <h1>Stock Phrase</h1>
            <p id='first_column'>ストックフレーズ・・・ </p>
            <p>同じ内容の会話になった際に、</p>
            <p>その人物が必ずと言っていいほど使う、</p>
            <p>お気に入りの単語、言い回しのこと。</p>
          </div>
        </div>
        <div className='top__ranking__body'>
          <div className='top__ranking__title'>Ranking</div>
          <ol>
            <li id='first'><span>1位</span>aaaaa</li>
            <li id='second'><span>2位</span>aaaaa</li>
            <li id='third'><span>3位</span>aaaaa</li>
            <li id='fourth'><span>4位</span>aaaaa</li>
            <li id='fifth'><span>5位</span>aaaaa</li>
          </ol>
        </div>
        <div className='top__footer'>
          <ul>
            <li>TOP</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
    )
  }
}