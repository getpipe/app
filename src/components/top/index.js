import React, { Component } from "react";
import "./style.css";

class Top extends Component {
  render() {
    let top = 'top';
    if (this.props.type === 'design') {
      top += ' top_view_design';
    } else if (this.props.type === 'frontend') {
      top += ' top_view_frontend';
    } else if (this.props.type === 'text') {
      top += ' top_view_text';
    } else {
      top += ' top_view_default';
    }
    return (
      <div className={top}>
        <div class="top__content">
          <div className="top__type">{this.props.type}</div>
          <div className="top__date text text_size_m text_view_primary">{this.props.date}</div>
          <div className="top__author text_size_xxl text_view_primary text_weight_bold">{this.props.author}</div>
          <div className="top__title text_size_m text_view_primary">{this.props.title}</div>
          <div className="top__decription text_size_m text_view_primary">{this.props.description}</div>
        </div>
        <div className="top__controls">
          <div className="top__send">Отправить решение</div>
        </div>
      </div>
    )
  }
}

export default Top;
