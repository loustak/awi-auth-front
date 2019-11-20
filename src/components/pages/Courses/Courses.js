import React, { useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import CourseItem from '../../CollapseItems/CourseItem/CourseItem'
import Form from 'react-bootstrap/Form'
import UEItem from '../../CollapseItems/UEItem/UEItem'

const courses = [
  {
    name: 'Cours 1',
    teacher: 'Arnaud Castelltort',
    hours: '33',
    credit: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    content: ''
  },
  {
    name: 'Cours 2',
    teacher: 'Anne Laurent',
    hours: '33',
    credit: '1',
    description: '',
    content: ''
  },
  {
    name: 'Cours 3',
    teacher: 'Arnaud Castelltort',
    hours: '33',
    credit: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma',
    content: ''
  }
]

const UE1 =
  {
    name: 'UE-TEST',
    credit: '9',
    courses: courses
  }


const semestres = [
  {
    name: 'Semestre 1',
    ue: [UE1,UE1]
  },
  {
    name: 'Semestre 2',
    ue: [UE1,UE1]
  }
]

function Courses (props) {
  const [search, setSearch] = useState('')

  return (
    <div className='applicationItem'>
      <div>
        {
          semestres.length > 0
          ? semestres.map((semestre, i) =>
              <React.Fragment key={i}>
                <Collapse title={semestre.name} defaultOpen={i === 0}>
                  <UEItem
                    ue={semestre.ue}
                  />
                </Collapse>
                <br />
              </React.Fragment>
            )
            :null
        }
      </div>
    </div>
  )

}

export default Courses
