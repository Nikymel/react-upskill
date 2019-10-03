import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { thisTypeAnnotation } from '@babel/types';
import UserCard from './components/UserCard'

class App extends Component {
  constructor(){
    super()
    this.state = {}
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
        })
      })
  }

  render() {
    if (!this.state.users) return (
      <div className='cardContainer'>
        <h1>Loading...</h1>
      </div>
    )
    const userCards = this.state.users.map(user => {
      return <UserCard key={user._id} data={user} />
    })

    return (
      <div className='cardContainer'>
        {userCards}
      </div>
    )
  }
}

export default App;
