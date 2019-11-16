import React from 'react'
import Collapse from '../../Collapse/Collapse'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'
import CourseItem from '../../CollapseItems/CourseItem/CourseItem'

const courses = [
  { name: 'Cours 1', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf'], marks:[10,12,18], announcement:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { name: 'Cours 2', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf','course1.pdf','course1.pdf','course1.pdf']  },
  { name: 'Cours 3', teacher:'Arnaud Castelltort', hours:'33', courses:['course1.pdf','course1.pdf','course1.pdf'] , announcement:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma' },
  { name: 'Cours 4'},
]

class Courses extends React.Component {
  render () {
    return (
      <div className='applicationItem'>
        {
          courses.length > 0
            ? courses.map((course, i) =>
              <> <Collapse title={course.name} subtitle={course.teacher ? course.teacher : ''} key={i}>
                  <CourseItem hours={course.hours} courses={course.courses} announcement={course.announcement} marks={course.marks} key={i} />
                 </Collapse>
                <br />
              </>
            )
            : <EmptyItem />
        }
      </div>
    )
  }
}

export default Courses
