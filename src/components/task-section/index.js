import React, { Component } from "react";
import TaskList from "../task-list";
import TopList from "../top-list";
import "./style.css";

class TaskSection extends Component {
  render() {
    return (
      <div>
        <div className="task-section">
          <div className="task-section__title">Hot Tasks</div>
          <div className="task-section__list">
            <TopList />
          </div>
        </div>

        <div className="task-section">
          <div className="task-section__title">Most Popular</div>
          <div className="task-section__list">
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskSection;
