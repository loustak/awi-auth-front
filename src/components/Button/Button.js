import React from 'react'
import styles from './Button.module.css'
import { Button as BButton } from 'react-bootstrap'

function Button(props) {
  return (
    <BButton
      className={styles.button}
      variant={props.variant || 'blue'}
      style={{ borderRadius: (props.shape === 'round' ? '50px' : props.shape === 'square' ? '0' : '0.25rem') }}
      {...props}
    >
      {props.children}
    </BButton>
  )
}

export default Button
