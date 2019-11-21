import React, { useState } from 'react'
import styles from './Collapse.module.css'
import { Collapse as BCollapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'
import { getRandomInt } from '../../Utils'

function Collapse (props) {
  const [open, setOpen] = useState(props.defaultOpen || false)
  const randomID = getRandomInt(99999)

  return (
    <div className={props.special ? styles.specialCollapse : styles.collapse}>
      <div
        className={styles.top}
        onClick={() => setOpen(!open)}
        aria-controls={'collapse-content' + randomID}
        aria-expanded={open}
      >
        <div className={styles.topLeft}>
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            className={styles.icon}
          />
          <div>
            <h4 className={styles.title}>{props.title}</h4>
            {
              props.subtitle
                ? <label className={styles.subtitle}>{props.subtitle}</label>
                : null
            }
          </div>
        </div>
        {
          props.buttonText
            ? <Button
              onClick={props.onClick}
              >
              {props.buttonText}
            </Button>
            : props.button
            ? props.button
            : null
        }
      </div>

      <BCollapse in={open} className={styles.contentWrapper}>
        <div id={'collapse-content' + randomID} className={styles.content}>
          {props.children}
        </div>
      </BCollapse>
    </div>
  )
}

export default Collapse
