import React, { Component } from "react";
import Task from "../task";
import "./style.css";
import axios from "axios";


// конфиг для авторизации в git api
const config = {
	headers: {
		Accept: "application/vnd.github.inertia-preview+json",
		Authorization: "token 2f934ad01edd9c644263ae87b1b573f3823931b0"
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
			<div class="theme_color_whitepaper-default tpl-grid tpl-grid_col-gap_two-thirds tpl-grid_row-gap_two-thirds tpl-grid_m-columns_12">
				{tsks.map(function(tsk) {
					return (
						<div class="tpl-grid__fraction tpl-grid__fraction_m-col_4">
							<Task
								key={tsk.id}
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
