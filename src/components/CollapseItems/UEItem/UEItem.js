import React from 'react'
import styles from './UEItem.module.css'
import CourseItem from '../CourseItem/CourseItem'
import Collapse from '../../Collapse/Collapse'
import markOperations from '../../../utils/MarksOperations'

function UEItem (props) {
  // -----------------------------VARIABLES-------------------------------------

  const modules = props.ue

  let filterSubjectName = false

  const filteredModules = modules
    .filter(module => props.query !== '' ? matchSearch(module, props.query) : true)

  // -----------------------------FUNCTIONS-------------------------------------

  function matchSearch (module, query) {
    const subjects = module.subjects.filter(s => s.title.toLowerCase().match(query))
    if (subjects.length > 0) { filterSubjectName = true }
    return module.title.toLowerCase().match(query) || subjects.length > 0
  }

  // -----------------------------RETURN-------------------------------------

  return (
    <div>
      {
        modules && modules.length > 0
          ? filteredModules.map((u, i) =>
            <><React.Fragment key={'ue' + i}>
              <h4 className={styles.title}> {u.title + '  -  ' + markOperations.getECTSFromUE(u) + ' ECTS'} </h4>
              {
                u.subjects && u.subjects.length > 0
                  ? u.subjects.filter(s => filterSubjectName ? s.title.toLowerCase().match(props.query) : true).map((course, j) =>
                    <Collapse title={course.title} special defaultOpen key={'a' + i + j}>
                      <div className={styles.courseInfo}>
                        {course.prenomFormateur
                          ? <h4 className={styles.titleCourse}>
                            <span id={styles.teacherName}>{'Enseigné par ' + course.prenomFormateur + ' ' +
                        (course.nomFormateur ? course.nomFormateur : '')}
                            </span>
                          </h4>
                          : null}
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
            </React.Fragment>
            </>
          )
          : null
      }
    </div>
  )
}

export default UEItem
