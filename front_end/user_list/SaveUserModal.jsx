import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'

const SaveUserModal = props => {
  const modalProps = {
    isOpen: props.modalIsOpen,
    ariaHideApp: false
  }
  return (
    <Modal {...modalProps}>
      <form onSubmit={e => props.submit(e, props.id)}>
        <label htmlFor='name'>
          お名前を入力してください
          <input type='text' name='name' id='name' onChange={e => props.inputChange(e)}/>
        </label>
        <label>
          <input type='submit' value='登録する'/>
        </label>
      </form>
      <button onClick={props.closeModal}>ユーザー一覧に戻る</button>
    </Modal>
  )
}

SaveUserModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  id: PropTypes.number,
  inputChange: PropTypes.func,
  submit: PropTypes.func
}

export default SaveUserModal
