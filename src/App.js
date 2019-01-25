import React, { Component } from 'react';
import TaskSection from './components/task-section';
import Manifest from './components/manifest';
import Footer from './components/footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Manifest></Manifest>
        <div className="layout">
          <div class="subtitle">Most popular</div>
          <TaskSection></TaskSection>
        </div>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
