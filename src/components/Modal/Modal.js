import React from 'react'
import Button from '../Button/Button'
import { Modal as BModal } from 'react-bootstrap'

/**
 * @return {null}
 */
function Modal (props) {
  // -----------------------------RETURN-------------------------------------

  return (
    !props.show
      ? null
      : <BModal show={props.show}>
        <BModal.Header>
          <BModal.Title>{props.title}</BModal.Title>
          <button type='button' className='close' data-dismiss='modal' onClick={props.onCancel}>&times;</button>
        </BModal.Header>
        <BModal.Body>{props.children}</BModal.Body>

        {
          props.buttonText
            ? <BModal.Footer>
              <Button onClick={props.onSuccess} disabled={props.disableButton}>
                {props.buttonText}
              </Button>
            </BModal.Footer>
            : null
        }

      </BModal>
  )
}

export default Modal
