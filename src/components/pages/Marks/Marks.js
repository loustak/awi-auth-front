import React, { useState } from 'react'
import Collapse from '../../Collapse/Collapse'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'
import styles from './Marks.module.css'
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap'

const courses = [
  { name: 'UE blablabla' },
  { name: 'UE blablabla' },
  { name: 'UE blablabla' }
]

function Marks(props) {

  const [search, setSearch] = useState('')

    return (
      <div className={styles.marksItem}>
        <div>
          {
            courses.length > 0
              ?
              <Form.Group as={Col} controlId='search' className='divSearchBarDash'>
                <Form.Label>Rechercher</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Rechercher"
                  onChange={e => setSearch(e.target.value.toLowerCase())}
                  className='searchBarDash'
                />
              </Form.Group>
              : null
          }
          {
            courses.filter(course => course.name.toLowerCase().includes(search)).map((course, i) => // TODO
              <> <Collapse title={course.name} key={i}>
                {
                  <EmptyItem />
                }
              </Collapse>
                <br />
              </>
            )
          }
        </div>
      </div>
    )
}

export default Marks
