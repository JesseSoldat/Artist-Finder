import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
       <TopBar/>
       <Dashboard/>
      </div>
    );
  }
}

export default App;
