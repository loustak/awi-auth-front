import React from 'react'
import styles from './UEItem.module.css'
import CourseItem from '../CourseItem/CourseItem'
import Collapse from '../../Collapse/Collapse'

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
                    <Collapse title={course.title} special={true} defaultOpen={true}>
                      <div className={styles.courseInfo}>
                          {course.prenomFormateur ?
                            <h4 className={styles.titleCourse}><span id={styles.teacherName}>{"   "+course.prenomFormateur+" "+
                              (course.nomFormateur ? course.nomFormateur : '' )}
                            </span></h4>
                            : null
                          }
                        <CourseItem
                          hours={parseFloat(course.cm) + parseFloat(course.cmtd)}
                          description={course.description ? course.description.replace(/<(.|\n)*?>/g, '') : ''}
                          credit={course.credit}
                          content={course.content ? course.content.replace(/<(.|\n)*?>/g, '') : ''}
                        />
                      </div>

                    </Collapse>

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
