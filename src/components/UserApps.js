import React from 'react'
import { Button, Container, Segment, Card } from 'semantic-ui-react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        infinite: true
      }
    }
  ]
}

const UserApps = () => {
  return (
    <Container>
      <Slider {...settings} style={{ padding: 50 }}>

        <Card color='teal' fluid>
          <Card.Content>
            <Card.Header textAlign='center'>My courses</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button icon='trash' compact size='mini' />
          </Card.Content>
        </Card>
        <Segment inverted size='huge' />

        <Card color='teal' fluid>
          <Card.Content>
            <Card.Header textAlign='center'>Admitech recruitment app</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button icon='trash' compact size='mini' />
          </Card.Content>
        </Card>
        <Segment inverted size='huge' />

        <Card color='teal' fluid>
          <Card.Content>
            <Card.Header textAlign='center'>IG social media</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button icon='trash' compact size='mini' />
          </Card.Content>
        </Card>
        <Segment inverted size='huge' />

        <Card color='teal' fluid>
          <Card.Content>
            <Card.Header textAlign='center'>Prello</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Button icon='trash' compact size='mini' />
          </Card.Content>
        </Card>
        <Segment inverted size='huge' />
      </Slider>
    </Container>
  )
}

export default UserApps
