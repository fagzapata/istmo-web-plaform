import React, { Component } from 'react';
import './App.css';
import { firebaseDatabase } from './data/firebase'
import 'jquery'
import 'popper.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './img/Istmo.png'

class App extends Component {

  componentDidMount() {
    console.log("Estoy creado")
    console.log(firebaseDatabase)
  }

  render() {
    return (
      <div className="w-100">
        <div className="w-100 bg-purple">
          <div className="container">
            <nav class="navbar navbar-light bg-purple">
              <a class="navbar-brand" href="#">
                <div className="w-100 d-flex">
                  <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                  <p className="text-white">Universidad Istmo Americana</p>
                </div>
              </a>
            </nav>
          </div>
        </div>
        <div className="bg-img-main d-flex justify-content-center">
          <div className="row align-self-center">
            <div className="col-md-12 card p-3">
              <div className="w-100 text-center">
                <h1>Bienvenido a la seccion de registro</h1>
              </div>

              <p>Seleccione el tipo de perfil a crear</p>
            </div>
          </div>
        </div>
        <footer className="bg-white">
          This is the footer
        </footer>
      </div>
    );
  }
}

export default App;
