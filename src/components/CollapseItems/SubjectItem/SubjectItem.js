import React from 'react'
import styles from './SubjectItem.module.css'
import TestForm from './TestForm'
import NewTestForm from './NewTestForm'

function SubjectItem (props) {
  return (
    <>
      {
        props.credit > 0
          ? <>
          <div className={styles.subjectName}>{props.title}</div>
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
                <div>{props.credit}</div>
                <div className={styles.subjectUnderDescription}>ECTS</div>
              </div>
            </div>
            {
              props.tests !== undefined
                ? props.tests.map((test, i) => {
                  return <TestForm test={test} semesterName={props.title} ueId={props.ueId} subjectId={props.id} key={Math.random()} id={'test' + i + test.name} />
                })
                : null
            }
            <NewTestForm semesterName={props.semesterName} ueId={props.ueId} subjectId={props.id} />
          </div>
          </>
          : null
      }
    </>
  )
}

export default SubjectItem
