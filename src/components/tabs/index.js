import React, { Component } from "react";
import "./style.css";

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="tabs__item tabs__item_state_action">Task</div>
        <div className="tabs__item">Map</div>
      </div>
    );
  }
}

export default Tabs;
