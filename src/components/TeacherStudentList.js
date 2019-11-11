import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const classesOptions = [
  {
    key: 'IG4',
    text: 'IG4',
    value: 'IG4',
    image: { src: 'https://www.polytech.umontpellier.fr/images/formation/ig/logoig.png' },
  }
]

const TeacherStudentList = () => (
  <Dropdown
    placeholder='Select your class'
    selection
    options={classesOptions}
  />
)

export default TeacherStudentList
