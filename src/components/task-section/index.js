import React, { Component } from "react";
import TaskList from "../task-list";
import TopList from "../top-list";
import "./style.css";

class TaskSection extends Component {
  render() {
    return (
      <div>
          <div className="tpl-layout__section decorator decorator_indent-b_xxxxxl">
            <div className="text text_view_primary text_size_xxl text_weight_bold decorator decorator_indent-b_xl">Hot Tasks</div>
            <TopList />
          </div>
          <div className="tpl-layout__section">
            <div className="text text_view_primary text_size_xxl text_weight_bold decorator decorator_indent-b_xl">Most Popular</div>
            <TaskList />
          </div>
      </div>
    );
  }
}

export default TaskSection;
