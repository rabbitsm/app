import React from 'react'
import { resolve } from '../helpers'

class Home extends React.Component {
  render() {
    return (
      <div>
        <img src={resolve('static/logo.png')} />
      </div>
    )
  }
}

export default Home