import React from 'react'
import PropTypes from 'prop-types'
import SaveUserModal from './SaveUserModal'
import client from '../config/ApiClient'

export default class UserTableColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateModalIsOpen: false
    }
  }

  openUpdateModal = () => this.setState({ updateModalIsOpen: true })

  closeUpdateModal = () => this.setState({ updateModalIsOpen: false })

  handleUpdateUser = (e, id) => {
    e.preventDefault()
    const { userInfo } = this.props
    client.put(`users/${id}`, userInfo)
      .then(res => {
        this.closeUpdateModal()
        const users = res.data.Value
        this.props.setUsers(users)
      })
      .catch(err => console.log(err))
  }

  render() {
    const modalProps = {
      modalIsOpen: this.state.updateModalIsOpen,
      closeModal: this.closeUpdateModal,
      id: this.props.user.ID,
      inputChange: this.props.inputChange,
      submit: this.handleUpdateUser
    }
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.user.ID}</td>
          <td>{this.props.user.Name}</td>
          <td><a onClick={this.openUpdateModal}>編集する</a></td>
          <td><a onClick={() => this.props.handleDeleteUser(this.props.user.ID)}>削除する</a></td>
          <SaveUserModal {...modalProps}/>
        </tr>
      </React.Fragment>
    )
  }
}

UserTableColumn.propTypes = {
  user: PropTypes.object,
  handleDeleteUser: PropTypes.func,
  inputChange: PropTypes.func,
  userInfo: PropTypes.object,
  setUsers: PropTypes.func
}
