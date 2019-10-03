import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className='navbar'>
        <h3>User Management System</h3>
        <button className='button'>Add User</button>
      </div>
    )
  }
}

export default Header