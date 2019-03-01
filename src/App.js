
import React from "react";
import Tabs from "./components/tabs";
import Task from "./components/task-screen";
import Map from "./components/map-screen";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
		<div className="App">
			<div className="App__layout">
				<div className="App__tabs">
					<Tabs />
				</div>
				<div className="App__content">
					<Route path="/" exact component={Task} />
					<Route path="/map/" component={Map} />
				</div>
			</div>
		</div>
    </Router>
  );
}

export default App;
