import * as React from 'react'
// import { Redirect } from 'react-router-dom'
import './Signin.scss'

interface User {
  email: string
  password: string
  [key: string]: string;
}

interface SigninProps {
  handleAuth: () => void
}

interface SigninState {
  user: User
}

export default class Signin extends React.Component<SigninProps, SigninState> {
  constructor(props: SigninProps) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      }
    }
  }

  handleChange = (e: any) => {
    const name: string = e.currentTarget.name
    const value: string = e.currentTarget.value
    const user: User = this.state.user
    user[name] = value
    this.setState({ user })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.handleAuth()
    window.location.href = '/'
  }

  render() {
    const { user } = this.state
    return (
      <div className='sign_in'>
        <div className='sign_in__inner'>
          <h1>ログイン</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='mail_address'>メールアドレス</label>
            <input
              type='text'
              placeholder='メールアドレス'
              value={user.email}
              name='email'
              id='mail_address'
              onChange={this.handleChange}
            />
            <div className='margin_50'></div>
            <label htmlFor='password'>パスワード</label>
            <input
              type='password'
              placeholder='パスワード'
              value={user.password}
              name='password'
              id='password'
              onChange={this.handleChange}
            />
            <div className='margin_50'></div>
            <input type='submit' className='log_in' value='ログイン' />
          </form>
        </div>
      </div>
    )
  }
}