import React from 'react'
import { Button } from 'rsm-ui'
import { resolve } from '../helpers'

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={resolve('static/logo.png')} />
        <Button color='primary'>Hello</Button>
      </div>
    )
  }
}

export default Home