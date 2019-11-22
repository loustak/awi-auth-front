import React from 'react'
import styles from './SubjectItem.module.css'
import TestForm from './TestForm'
import NewTestForm from './NewTestForm'
import EmptyTest from './EmptyTest'

function SubjectItem (props) {

  //-----------------------------RETURN-------------------------------------

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
                <div>{props.credit.toString()}</div>
                <div className={styles.subjectUnderDescription}>ECTS</div>
              </div>
            </div>
            <NewTestForm semesterName={props.semesterName} ueId={props.ueId} subjectId={props.id} />
            {
              props.tests !== undefined && props.tests.length > 0
                ? props.tests.map((test, i) => {
                  return <TestForm test={test} semesterName={props.semesterName} ueId={props.ueId} subjectId={props.id} key={Math.random()} id={'test' + i + test.name} />
                })
                : <EmptyTest />
            }
          </div>
          </>
          : null
      }
    </>
  )
}

export default SubjectItem
