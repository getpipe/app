import React, { Component } from "react";
import "./style.css";

class Top extends Component {
  render() {
    let top = 'top';
    let top__type = 'top__type';
    if (this.props.type == 'design') {
      top += ' top_view_design';
      top__type += ' top__type_view_design';
    } else if (this.props.type == 'frontend') {
      top += ' top_view_frontend';
      top__type += ' top__type_view_frontend';
    } else if (this.props.type == 'text') {
      top += ' top_view_text';
      top__type += ' top__type_view_text';
    } else {
      top += ' top_view_default';
      top__type += ' top__type_view_default';
    }
    return (
      <div className={top}>
        <div class="top__content">
          <div className={top__type}>{this.props.type}</div>
          <div className="top__date">{this.props.date}</div>
          <div className="top__author">{this.props.author}</div>
          <div className="top__title">{this.props.title}</div>
          <div className="top__decription">{this.props.description}</div>
        </div>
        <div className="top__controls">
          <div className="top__send">Отправить решение</div>
        </div>
      </div>
    )
  }
}

export default Top;
