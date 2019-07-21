import React from 'react'
import client from '../config/ApiClient'
import SaveUserModal from './UpdateUserModal'
import UserTableColumn from './UserTableColumn'

export default class UserList extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      modalIsOpen: false,
      userInfo: {
        name: ''
      }
    }
  }

  componentDidMount() {
    client.get('users')
      .then(res => {
        const users = res.data.Value
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }

  // eslint-disable-next-line no-unused-vars
  handleSaveUser = (e, _) => {
    e.preventDefault()
    const { userInfo } = this.state
    client.post('users', userInfo)
      .then(res => {
        this.closeModal()
        const users = res.data.Value
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }

  handleUpdateUser = (e, id) => {
    console.log(id)
    e.preventDefault()
    const { userInfo } = this.state
    client.put(`users/${id}`, userInfo)
      .then(res => {
        this.closeModal()
        const users = res.data.Value
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }

  handleDeleteUser = id => {
    const result = window.confirm('本当に削除しますか？')
    if (!result) { return }
    client.delete(`users/${id}`)
      .then(res => {
        const users = res.data.Value
        this.setState({ users })
      })
      .catch(err => console.log(err))
  }


  openModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  handleInputChange = e => {
    const { userInfo } = this.state
    userInfo[e.target.name] = e.currentTarget.value
    this.setState({ userInfo })
  }

  render() {
    const userColumns = this.state.users.map((user, idx) => {
      const columnProps = {
        user,
        handleDeleteUser: this.handleDeleteUser,
        modalIsOpen: this.state.modalIsOpen,
        openModal: this.openModal,
        closeModal: this.closeModal,
        inputChange: this.handleInputChange,
        submit: this.handleUpdateUser
      }
      return <UserTableColumn key={idx} {...columnProps}/>
    })

    const newModalProps = {
      modalIsOpen: this.state.modalIsOpen,
      closeModal: this.closeModal,
      id: 0,
      inputChange: this.handleInputChange,
      submit: this.handleSaveUser
    }
    console.log(this.state.userInfo)
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userColumns}
          </tbody>
        </table>
        <a onClick={this.openModal}>新規ユーザー登録</a>
        <SaveUserModal {...newModalProps}/>
      </React.Fragment>
    )
  }
}