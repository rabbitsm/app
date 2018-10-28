import React from 'react'
import styled from 'styled-components'
import { Card, Button, Input, Typography } from 'rsm-ui'

import { resolve } from '../helpers'

const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <img width='500px' height='600px' src={resolve('static/signup-cover.jpg')} />
        </div>
        <Card align='center' size='center' variant='contained' color='default' width='350px'>
          <Typography align='center' variant='subheading'>Signup</Typography>
          <Input size='full' placeholder='Username' />
          <br />
          <br />
          <Input size='full' placeholder='Name' />
          <br />
          <br />
          <Input size='full' placeholder='Email' />
          <br />
          <br />
          <Input size='full' placeholder='Password' />
          <br />
          <br />
          <Button size='full' color='primary'>Signup</Button>
          <br />
          <Typography align='center'>Already have an account?</Typography>
          <Button size='full' color='secondary'>Login</Button>
        </Card>
      </Container>
    )
  }
}

export default Home