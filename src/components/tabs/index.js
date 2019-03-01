import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Tabs extends Component {
	render() {
		return (
			<div className="tabs">
				<Link to="/" style={{ textDecoration: 'none' }} >
					<div className="tabs__item tabs__item_state_action">Task</div>
				</Link>
				<Link to="/map/" style={{ textDecoration: 'none' }} >
					<div className="tabs__item">Map</div>
				</Link>
			</div>
		);
	}
}

export default Tabs;
