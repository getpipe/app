import React, { Component } from 'react';
import './style.css'

class Top extends Component  {
  render() {
      return (
        <div className="top">
          <div className="top__type">{this.props.type}</div>
          <div className="top__date">{this.props.date}</div>
          <div className="top__author">{this.props.author}</div>
          <div className="top__title">{this.props.title}</div>
          <div className="top__decription">{this.props.description}</div>
          <div className="top__controls">
            <div className="top__send">Отправи решение</div>
          </div>
        </div>
      )
  }
} 

export default Top;
