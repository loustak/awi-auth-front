import React, { useEffect } from 'react'
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
