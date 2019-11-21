import React from 'react'
import styles from './UEItem.module.css'
import CourseItem from '../CourseItem/CourseItem'

function UEItem (props) {
  const modules = props.ue
  return (
    <div>
        {
          modules && modules.length > 0
          ? modules.map((u, i) =>
                <>
                <h4 className={styles.title}> {u.title} || {u.credit} ETCS </h4>
                {
                  u.subjects && u.subjects.length > 0
                  ? u.subjects.map((course, i) =>
                    <React.Fragment key={i}>
                      <div className={styles.courseInfo}>
                        <h4 className={styles.titleCourse}>{course.title} - NOM PROF</h4>
                        <CourseItem
                          hours=''
                          description={course.description}
                          credit={course.credit}
                          teacher={course.prenomFormateur+" "+course.nomFormateur}
                          content={course.content}
                        />
                      </div>
                    </React.Fragment>
                  )
                    : null
                }
                </>
            )
            : null
        }

    </div>
  )

}

export default UEItem
