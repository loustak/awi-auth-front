import React from 'react'
import styles from './Button.module.css'
import { Button as BButton } from 'react-bootstrap'

function Button (props) {

  //-----------------------------RETURN-------------------------------------

  return (
    <BButton
      className={styles.button}
      variant={props.variant || 'blue'}
      style={{ borderRadius: (props.shape === 'round' ? '33px' : props.shape === 'square' ? '0' : '33px') }}
      {...props}
    >
      {props.children}
    </BButton>
  )
}

export default Button
