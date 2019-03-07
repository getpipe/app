import React, { Component } from "react";
import Footer from "../footer";
import TaskSection from "../task-section";
import Manifest from "../manifest";
import "../../App.css";

class TaskScreen extends Component {
	render() {
		return (
			<div className="App__tasks">
				<TaskSection />
			</div>
		);
	}
}

export default TaskScreen;