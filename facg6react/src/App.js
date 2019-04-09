import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Student from "./components/student";
// import AllStudent from "./components/allStudents"
// import Home from "./components/Home";
import Header from "./layout/header"
class App extends Component {
  render() {
    return (
      <div className="layout">
      <BrowserRouter>
        
          <Header />
       
       
      </BrowserRouter>
       </div>
      
      // <Home />
    );
  }
}

export default App;
