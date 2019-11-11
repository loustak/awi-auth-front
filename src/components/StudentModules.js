import React from 'react'
import { Container, Header, List, Table, Input, Label } from 'semantic-ui-react'

const generalAverage = 9

const StudentModules = () => (
  <Container>
    <Header as='h4'>Semester 9</Header>
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='6'>UE Architecture des SI</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>AWI</Table.Cell>
          <Table.Cell collapsing>A. Castelltort</Table.Cell>
          <Table.Cell collapsing>
            <List>
              <List.Item>CM 10h</List.Item>
              <List.Item>TD</List.Item>
              <List.Item>TP 20h</List.Item>
            </List>
          </Table.Cell>
          <Table.Cell collapsing>
            MCC description
          </Table.Cell>
          <Table.Cell collapsing textAlign='right'>1 ECTS</Table.Cell>
          <Table.Cell collapsing textAlign='right'>
            <Input type='number' fluid placeholder='Mark' size='mini' label={{ basic: false, content: '/20' }} labelPosition='right' />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <Container textAlign='right'>
      <Label basic color={generalAverage > 10 ? 'green' : 'red'}>Average: 12/20 </Label>
    </Container>
  </Container>
)

export default StudentModules
