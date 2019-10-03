import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { thisTypeAnnotation } from '@babel/types';
import MainBody from './components/MainBody'
import Header from './components/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <MainBody />
      </div>
    )
  }
}

export default App;
