import React, { useEffect } from 'react'
import styles from './CourseItem.module.css'
import Encoder from '../../../utils/htmlEncoder'
import { setProfile } from '../../services/AuthenticationService'

function PagesWrapper (props) {
  useEffect(() => {
    setProfile()
  }, [])

  //-----------------------------RETURN-------------------------------------

  return (
    <>
      {props.children}
    </>
  )
}

export default PagesWrapper
