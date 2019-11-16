import React from 'react'
import Collapse from '../../Collapse/Collapse'
import EmptyItem from '../../CollapseItems/EmptyItem/EmptyItem'

const courses = [
  { name: 'Cours 1' },
  { name: 'Cours 2' },
  { name: 'Cours 3' }
]

class Courses extends React.Component {
  render () {
    return (
      <div className='applicationItem'>
        {
          courses.length > 0
            ? courses.map((cours, i) =>
              <> <Collapse title={cours.name} key={i}>
                {
                  <EmptyItem />
                }
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
