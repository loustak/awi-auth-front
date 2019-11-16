import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import styles from './SidebarButton.module.css'
import Button from '../Button/Button'
import classNames from 'classnames'

function SidebarButton (props) {
  const { variant = '' } = props

  return (
    <Button
      className={classNames({
        [styles.sidebarButton]: true,
        [styles.current]: props.location.pathname === props.to
      })}
      as={Link}
      to={props.to}
      exact
      variant={variant}
      shape='square'
    >
      {props.name}
    </Button>
  )
}

export default withRouter(SidebarButton)
