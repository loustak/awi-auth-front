import React from 'react'
import Button from '../Button/Button'
import { Modal as BModal } from 'react-bootstrap'

/**
 * @return {null}
 */
function Modal (props) {
  return (
    !props.show
      ? null
      : <>
        <BModal show={props.show}>
          <BModal.Header>
            <BModal.Title>{props.title}</BModal.Title>
            <button type='button' className='close' data-dismiss='modal' onClick={props.onClick}>&times;</button>
          </BModal.Header>
          <BModal.Body>{props.content}</BModal.Body>

          {props.addButton
            ? <BModal.Footer>
              <Button shape='round' onClick={props.onClick}>
                {props.nameButton}
              </Button>
              </BModal.Footer>
            : null}

        </BModal>
      </>
  )
}

export default Modal
