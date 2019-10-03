import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { thisTypeAnnotation } from '@babel/types';
import MainBody from './components/MainBody'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
      width: '100%',
      justifyContent: 'space-between'
    }
    return (
      <div style={style}>
        <div>
          <Header />
          <MainBody />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
