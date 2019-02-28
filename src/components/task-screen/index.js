import React, { Component } from "react";
import Footer from "../footer";
import TaskSection from "../task-section";
import Manifest from "../manifest";
import "../../App.css";

class TaskScreen extends Component {
	render() {
		return (
			<div className="App">
				<div className="App__layout">
					<div className="App__manifest">
						<Manifest />
					</div>
					<div className="App__tasks">
						<TaskSection />
					</div>
					<div className="App__footer">
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default TaskScreen;