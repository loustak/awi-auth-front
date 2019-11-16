import React, { useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import CourseItem from '../../CollapseItems/CourseItem/CourseItem'
import Form from 'react-bootstrap/Form'
import styles from './Courses.module.css'
import { Col } from 'react-bootstrap'


const courses = [
  { name: 'Cours 1', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf'], marks:[10,12,18], announcement:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { name: 'Cours 2', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf','course1.pdf','course1.pdf','course1.pdf']  },
  { name: 'Cours 3', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf'] , announcement:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma' },
  { name: 'Cours 4'},
]

function Courses (props) {
  const [search, setSearch] = useState('')


  return (
      <div className='applicationItem'>
        <div>
          {
            courses.length > 0
              ?
                <Form.Group as={Col} controlId='search' className={styles.divSearchBar}>
                <Form.Label>Rechercher</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rechercher"
                  onChange={e => setSearch(e.target.value.toLowerCase())}
                  className={styles.searchBar}
                />
                </Form.Group>
              : null
          }
          {
            courses.filter(course => course.name.toLowerCase().includes(search)).map((course, i) => // TODO
              <> <Collapse title={course.name} subtitle={course.teacher ? course.teacher : ''} key={i}>
                <CourseItem hours={course.hours} courses={course.courses} announcement={course.announcement} marks={course.marks} key={i} />
              </Collapse>
                <br />
              </>
            )
          }
        </div>
      </div>
    )

}

export default Courses
