import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './SidebarButton.module.css'
import Button from '../Button/Button'

function SidebarButton(props) {
  const { variant = '' } = props

  return (
    <Button
      className={styles.sidebarButton}
      as={NavLink}
      to={props.to}
      exact
      variant={variant}
      shape='square'
    >
      {props.name}
    </Button>
  )
}

export default SidebarButton
