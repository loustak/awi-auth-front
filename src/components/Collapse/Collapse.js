import React, { useState } from 'react'
import styles from './Collapse.module.css'
import { Collapse as BCollapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse (props) {
  const [open, setOpen] = useState(true)

  return (
    <div className={styles.collapse}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            onClick={() => setOpen(!open)}
            aria-controls='collapse-content'
            aria-expanded={open}
            className={styles.icon}
          />
          <h4 className={styles.title}>{props.title}</h4>
        </div>
      </div>

      <BCollapse in={open} className={styles.contentWrapper}>
        <div id='collapse-content'>
          {props.children}
        </div>
      </BCollapse>
    </div>
  )
}

export default Collapse
