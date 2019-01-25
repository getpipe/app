import React, { Component } from 'react';
import './style.css'

class Task extends Component  {
  render() {
      return (
        <div className="task">
          <div className="task__type">{this.props.type}</div>
          <div className="task__date">{this.props.date}</div>
          <div className="task__author">{this.props.author}</div>
          <div className="task__title">{this.props.title}</div>
          <div className="task__decription">{this.props.description}</div>
          <div className="task__controls">
            <div className="task__send">Отправить решение</div>
          </div>
        </div>
      )
  }
} 

export default Task;
