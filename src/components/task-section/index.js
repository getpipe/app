import React, { Component } from 'react';
import TaskList from '../task-list';
import './style.css'

class TaskSection extends Component  {
  render() {
    return (
      <div className="task-section">
        <div className="task-section__title">Most Popular</div>
        <div className="task-section__list">
          <TaskList></TaskList>
        </div>
      </div>
    )
  }
} 

export default TaskSection;
