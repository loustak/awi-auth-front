import React from 'react'
import styles from './UEItem.module.css'
import CourseItem from '../CourseItem/CourseItem'

function UEItem (props) {

  return (
    <div>
      {
        props.ue.map((u, i) =>
          <React.Fragment key={i}>
            <h4 className={styles.title}>{u.name} - {u.credit} ETCS </h4>
            {
              u.courses.map((course, i) =>
                <React.Fragment key={i}>
                  <div className={styles.courseInfo}>
                    <h4 className={styles.titleCourse}>{course.name} - {course.teacher}</h4>
                    <CourseItem
                      hours={course.hours}
                      description={course.description}
                      credit={course.credit}
                      teacher={course.teacher}
                      content={course.content}
                    />
                  </div>
                </React.Fragment>
              )
            }
          </React.Fragment>
        )
      }
    </div>
  )

}

export default UEItem
