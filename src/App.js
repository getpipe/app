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

        <div className="layout">

          <div className="layout__tabs">
              <div className="tabs">
                <div class="tabs__item"></div>
              </div>
          </div>

          <div className="layout__manifest">
              <Manifest></Manifest>
          </div>

          <div className="layout__tasks">
            <TaskSection></TaskSection>
          </div>

          <div className="layout__footer">
            <Footer></Footer>
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;
