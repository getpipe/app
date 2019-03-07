import React, { Component } from "react";
import Task from "../task";
import "./style.css";
import axios from "axios";

// конфиг для авторизации в git api
const config = {
	headers: {
		Accept: "application/vnd.github.inertia-preview+json",
		Authorization: "token 6d9bc870bb68b6f995930d0d21ad6ce44990e6c2"
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
						type: "design",
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
			<div class="theme_color_whitepaper-default tpl-grid tpl-grid_s-ratio_1 tpl-grid_m-ratio_1-1 tpl-grid_l-ratio_1-1-1 tpl-grid_col-gap_half tpl-grid_row-gap_half">
				{tsks.map(function(tsk) {
					return (
						<Task
							key={tsk.id}
							type={tsk.type}
							date={tsk.date}
							author={tsk.author}
							title={tsk.title}
							description={tsk.description}
						/>
					);
				})}
			</div>
		);
	}
}

export default TaskList;
