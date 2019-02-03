import React, { Component } from "react";
import TaskSection from "./components/task-section";
import Manifest from "./components/manifest";
import Footer from "./components/footer";
import Tabs from "./components/tabs";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layout">
          <div className="layout__tabs">
            <Tabs />
          </div>
          <div className="layout__manifest">
            <Manifest />
          </div>
          <div className="layout__tasks">
            <TaskSection />
          </div>
          <div className="layout__footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
