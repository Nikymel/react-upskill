import React, { Component } from 'react'

class UserCard extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const age = this.props.data.age ? this.props.data.age : '-'
    return (
      <div className='card'>
        <div className='title'>
          <h2>{this.props.data.username}</h2>
          <span className='tag'>{age}</span>
        </div>
        <div className='card-body'>
          <p>{this.props.data.name}</p>
        </div>
      </div>
    ) 
  }
}

export default UserCard