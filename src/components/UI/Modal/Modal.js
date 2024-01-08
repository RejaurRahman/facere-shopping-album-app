import React from 'react'

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg'

import {
  ModalBox,
  ModalBoxTop,
  ModalClose,
  ModalOverlay,
  ModalWrapper
} from './Modal.styles'

const Modal = (props) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <ModalBoxTop>
          <ModalClose
            onClick={props.onClick}
          >
            <CloseIcon />
          </ModalClose>
        </ModalBoxTop>

        {props.children}
      </ModalBox>

      <ModalOverlay
        onClick={props.onClick}
      />
    </ModalWrapper>
  )
}

export default Modal
