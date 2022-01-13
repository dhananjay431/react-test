import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Test from './pages/Test';
import Home from './pages/Home';
import { Nav } from './component/nav/Nav';
export default class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <Nav></Nav>

        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home name="Home-Name" />} />
            <Route path="/test" element={<Test />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    );
  }
}
