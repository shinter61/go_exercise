import React from 'react'
import PropTypes from 'prop-types'
import SaveUserModal from './SaveUserModal'

const UserTableColumn = props => {
  const modalProps = {
    modalIsOpen: props.modalIsOpen,
    closeModal: props.closeModal,
    id: props.user.ID,
    inputChange: props.inputChange,
    submit: props.submit
  }
  return (
    <React.Fragment>
      <tr>
        <td>{props.user.ID}</td>
        <td>{props.user.Name}</td>
        <td><a onClick={props.openModal}>編集する</a></td>
        <td><a onClick={() => props.handleDeleteUser(props.user.ID)}>削除する</a></td>
        <SaveUserModal {...modalProps}/>
      </tr>
    </React.Fragment>
  )
}

UserTableColumn.propTypes = {
  user: PropTypes.object,
  handleDeleteUser: PropTypes.func,
  modalIsOpen: PropTypes.bool,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  inputChange: PropTypes.func,
  submit: PropTypes.func
}

export default UserTableColumn
