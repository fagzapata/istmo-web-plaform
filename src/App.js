import React, { Component } from 'react';
import './App.css';
import {firebaseDatabase} from './data/firebase'


class App extends Component {

  componentDidMount() {
    console.log("Estoy creado")
    console.log(firebaseDatabase)
  }

  render() {
    return (
      <div >
        App web
      </div>
    );
  }
}

export default App;
