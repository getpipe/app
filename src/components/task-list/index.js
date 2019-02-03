import React, { Component } from "react";
import Task from "../task";
import "./style.css";
import axios from "axios";

// конфиг для авторизации в git api
const config = {
  headers: {
    Accept: "application/vnd.github.inertia-preview+json",
    Authorization: "507443ddb433f25408eface687f6041af5cdd387"
  }
};

class TaskList extends Component {
  state = {
    items: []
  };

  componentWillMount() {
    // просим у api карточки с доски https://github.com/orgs/whitepapertools/projects/3#column-3318855
    axios
      .get("https://api.github.com/projects/columns/3318855/cards", config)
      .then(response => {
        // достаем из ответа нужные нам поля
        const tasks = response.data.map(item => {
          return {
            type: "",
            date: item["created_at"],
            author: item["creator"]["login"],
            title: "У карт нет заголовка :)",
            description: item["note"],
            id: item["id"]
          };
        });
        this.setState({ items: tasks });
      });
  }

  render() {
    let tsks = this.state.items;
    return (
      <div className="section">
        {tsks.map(function(tsk) {
          return (
            <div className="col" key={tsk.id}>
              <Task
                type={tsk.type}
                date={tsk.date}
                author={tsk.author}
                title={tsk.title}
                description={tsk.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TaskList;
