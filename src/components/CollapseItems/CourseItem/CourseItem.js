import React, {useState} from 'react'
import styles from './CourseItem.module.css'

function CourseItem (props) {
  function downloadCourse(index) {
    console.log('TODO')
    console.log(index)
    // TODO
  }

  return (
    <div className={styles.courseItem}>
      <div className={styles.hours}>
        {
          props.hours
          ? <p>Hours : {props.hours}</p>
          : null
        }
      </div>
      <div className={styles.info}>
        <div>
          <label>COURS</label>
          <p>
            {
              props.courses
              ? props.courses.length > 0
                ? props.courses.map((course, i) =>
                <>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={i} id={"checkCourse"+i} />
                      <label className="form-check-label" htmlFor={i} onClick={() => downloadCourse(i)}>
                        {course}
                      </label>
                  </div>
                </>
                )
                : <p>--</p>
              : <p>--</p>
            }
          </p>
        </div>
        <div>
          <label>NOTES</label>
            {
              props.marks
                ? props.marks.length > 0
                ? props.marks.map((mark, i) =>
                  <><p>
                    {mark}
                </p>

                  </>
                )
                : <p>--</p>
                : <p>--</p>
            }
        </div>
        {
          props.announcement
          ? <div id={styles.announcement}>
              <label>ANNONCE</label>
              <p>{props.announcement}</p>
            </div>
          : null
        }
      </div>
    </div>
  )
}

export default CourseItem
