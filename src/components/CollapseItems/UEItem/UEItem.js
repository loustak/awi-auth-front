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
                <h4 className={styles.title}> {u.title} - {u.credit} ETCS </h4>
                {
                  u.subjects && u.subjects.length > 0
                  ? u.subjects.map((course, j) =>
                    <React.Fragment key={j}>
                      <div className={styles.courseInfo}>
                        <h4 className={styles.titleCourse}>
                          {course.title}
                          {course.prenomFormateur ?
                            <span id={styles.teacherName}>{"   "+course.prenomFormateur+" "+
                              (course.nomFormateur ? course.nomFormateur : '' )}
                            </span>
                            : ''
                          }
                        </h4>
                        <CourseItem
                          hours={parseFloat(course.cm) + parseFloat(course.cmtd)}
                          description={course.description ? course.description.replace(/<(.|\n)*?>/g, '') : ''}
                          credit={course.credit}
                          content={course.content ? course.content.replace(/<(.|\n)*?>/g, '') : ''}
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
