import React from 'react'
import { create, act } from 'react-test-renderer'
import Courses from '../components/pages/Courses/Courses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

describe('Courses page test', () => {
  test('Matches the snapshot', () => {
    const collapse = create(<Courses />)
    // expect(collapse.toJSON()).toMatchSnapshot()
  })
})
