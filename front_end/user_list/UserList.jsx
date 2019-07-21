import React from 'react'
import client from '../config/ApiClient'
import SaveUserModal from './SaveUserModal'
import UserTableColumn from './UserTableColumn'

export default class UserList extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      createModalIsOpen: false,
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
        this.closeCreateModal()
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

  openCreateModal = () => this.setState({ createModalIsOpen: true })

  closeCreateModal = () => this.setState({ createModalIsOpen: false })

  handleInputChange = e => {
    const { userInfo } = this.state
    userInfo[e.target.name] = e.currentTarget.value
    this.setState({ userInfo })
  }

  setUsers = users => this.setState({ users })

  render() {
    const userColumns = this.state.users.map((user, idx) => {
      const columnProps = {
        user,
        handleDeleteUser: this.handleDeleteUser,
        inputChange: this.handleInputChange,
        userInfo: this.state.userInfo,
        setUsers: this.setUsers
      }
      return <UserTableColumn key={idx} {...columnProps}/>
    })

    const newModalProps = {
      modalIsOpen: this.state.createModalIsOpen,
      closeModal: this.closeCreateModal,
      id: 0,
      inputChange: this.handleInputChange,
      submit: this.handleSaveUser
    }
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
        <a onClick={this.openCreateModal}>新規ユーザー登録</a>
        <SaveUserModal {...newModalProps}/>
      </React.Fragment>
    )
  }
}