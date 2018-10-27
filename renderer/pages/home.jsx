import React from 'react'
import { Button, Input } from 'rsm-ui'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder='username' />
        <Button color='primary'>Hello</Button>
      </div>
    )
  }
}

export default Home