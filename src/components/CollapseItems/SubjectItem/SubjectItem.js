import React from 'react'
import styles from './SubjectItem.module.css'
import { faCheck, faCross, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button as BButton, Button, Form } from 'react-bootstrap'
import classNames from 'classnames'

function SubjectItem (props) {
  return (
    <>
      <div className={styles.subjectName}>{props.name}</div>
      <div className={styles.subjectContainer}>
        <div className={styles.subjectInfosDetails}>
          <div className={styles.subjectAverage}>
            <div className={(props.average
              ? props.average < 6
                ? styles.averageDanger
                : props.average < 10
                  ? styles.averageRisk
                  : styles.averageValid
              : styles.averageMissing)}
            >
              {props.average ? props.average : '-'}
            </div>
            <div className={styles.subjectUnderDescription}>Moyenne</div>
          </div>
          <div className={styles.subjectECTS}>
            <div>{props.ects}</div>
            <div className={styles.subjectUnderDescription}>ECTS</div>
          </div>
        </div>
        <div className={styles.subjectTests}>
          {
            props.tests !== undefined
              ? props.tests.map((test) =>
                <Form className={styles.testContainer}>
                  <Form.Control defaultValue={test.exam} type='text' className={styles.testName} />
                  <div className={styles.markFieldContainer}>
                    <Form.Control
                      defaultValue={test.mark}
                      className={styles.testNumberInfo}
                      type='number'
                      step='0.01'
                    />
                    <div className={styles.subjectUnderDescription}>/20</div>
                  </div>
                  <div>
                    <Form.Control
                      defaultValue={test.coeff}
                      className={styles.testNumberInfo}
                      type='number'
                      step='0.5'
                    />
                    <div className={styles.subjectUnderDescription}>Coeff</div>
                  </div>
                  <Button type='submit' className={styles.testButton}>
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={styles.testButtonIcon}
                    />
                  </Button>
                </Form>
              )
              : null
          }
          <Form className={classNames({[styles.testContainer]: true, [styles.newTestContainer]: true})}>
            <Form.Control defaultValue='Devoir' type='text' className={styles.testName} />
            <div className={styles.markFieldContainer}>
              <Form.Control
                defaultValue={10}
                className={styles.testNumberInfo}
                type='number'
                step='0.01'
              />
              <div className={styles.subjectUnderDescription}>/20</div>
            </div>
            <div>
              <Form.Control
                defaultValue={1}
                className={styles.testNumberInfo}
                type='number'
                step='0.5'
              />
              <div className={styles.subjectUnderDescription}>Coeff</div>
            </div>
            <Button type='submit' className={styles.testButton}>
              <FontAwesomeIcon
                icon={faPlus}
                className={styles.testButtonIcon}
              />
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default SubjectItem
