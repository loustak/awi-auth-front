import React from 'react'
import { Item } from 'semantic-ui-react'

const StudentGeneralInfos = () => (
  <Item.Group divided>
    <Item>
      <Item.Image size='mini' src='https://www.polytech.umontpellier.fr/images/formation/ig/logoig.png' />
      <Item.Content verticalAlign='middle'>Cursus for current year: IG4</Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>Content B</Item.Content>
    </Item>
  </Item.Group>
)

export default StudentGeneralInfos
