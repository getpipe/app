import React, { Component } from "react";
import Top from "../top";
import "./style.css";

let tasks = [
	{
		type: "text",
		date: "10 февраля",
		author: "Вадим Макеев!!!",
		title: "Add new data sources to Ossert: Reddit",
		description: "We need to come up with a new API for PostCSS plugins - so that they all work together, in one cycle of walking through the AST tree. The task is difficult. It is less about code and more about negotiation, analysis and architecture. But it gives the maximum amount of experience. Advantage: to become one of the leading committers of PostCSS, add to the resume a line on the development of competent architecture in a global project.",
		id: "1"
	},
	{
		type: "frontend",
		date: "10 февраля",
		author: "Вадим Макеев",
		title: "Event architecture PostCSS",
		description: "We need to come up with a new API for PostCSS plugins - so that they all work together, in one cycle of walking through the AST tree. The task is difficult. It is less about code and more about negotiation, analysis and architecture. But it gives the maximum amount of experience. But it gives the maximum amount of experience.",
		id: "2"
	},
	{
		type: "design",
		date: "10 февраля",
		author: "Вадим Макеев",
		title: "Add new data sources to Ossert: Reddit",
		description: "We need to come up with a new API for PostCSS plugins - so that they all work together, in one cycle of walking through the AST tree. The task is difficult. It is less about code and more about negotiation, analysis and architecture. But it gives the maximum amount of experience. Advantage: to become one of the leading committers of PostCSS, add to the resume a line on the development of competent architecture in a global project.",
		id: "3"
	}
];

class TopList extends Component {
	state = {
		items: tasks
	};
	render() {
		let tsks = this.state.items;
		return (
			<div class="theme_color_whitepaper-default tpl-grid tpl-grid_s-ratio_1 tpl-grid_m-ratio_1-1 tpl-grid_l-ratio_1-1-1 tpl-grid_col-gap_half">
				{tsks.map(function(tsk) {
					return (
						<div className="tpl-grid__fraction" key={tsk.id}>
							<Top
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

export default TopList;
