import React from 'react'
import logo from '../../assets/logoMyDash.svg'
import { Button, Container, Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeItem: 'dashboard'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <Menu stackable>
          <Container>
            <Menu.Item as='a' disabled>
              <Image size='tiny' src={logo} />
            </Menu.Item>

            <Link to='/dashboard'>
              <Menu.Item
                as='a'
                name='dashboard'
                active={activeItem === 'dashboard'}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link to='/statistics'>
              <Dropdown item simple text='Statistics'>
                <Dropdown.Menu>
                  <Dropdown.Item path='statistics/general' onClick={this.handleItemClick}>General</Dropdown.Item>
                  <Dropdown.Item>Courses</Dropdown.Item>
                  <Dropdown.Item>...</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Link>

            <Menu.Item as='a' position='right'>
              <Button>
                <Icon name='log out' color='red' />
                Log out
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </div>

    )
  }
}

export default MenuHeader
