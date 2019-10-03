import React, { Component } from 'react'
import Loading from './Loading'
import UserCard from './UserCard'

class MainBody extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch('http://127.0.0.1:8000/api/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.data,
          loading: false,
        })
      })
  }

  render() {
    const userCards = this.state.users.map(user => {
      return <UserCard key={user._id} data={user} />
    })

    return (
      <div className='cardContainer'>
        {this.state.loading ? <Loading /> : userCards}
      </div>
    )
  }
}

export default MainBody