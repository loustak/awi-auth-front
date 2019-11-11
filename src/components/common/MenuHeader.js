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
            <Menu.Item as='a' disabled>
              <Image size='tiny' src={logo} />
            </Menu.Item>

              <Menu.Item
                as='a'
                name='dashboard'
                active={activeItem === 'dashboard'}
                onClick={this.handleItemClick}
              >
                <Link to={`/${this.props.userRole}/dashboard`}>Dashboard</Link>
              </Menu.Item>

            <Menu.Item
              as='a'
              name='statistics'
              active={activeItem === 'statistics'}
              onClick={this.handleItemClick}
            >
              <Link to='/statistics'>Statistics</Link>
            </Menu.Item>

            <Menu.Item as='a' position='right'>
              <Button>
                <Icon name='log out' color='red' />
                Log out
              </Button>
            </Menu.Item>
        </Menu>
      </div>

    )
  }
}

export default MenuHeader
