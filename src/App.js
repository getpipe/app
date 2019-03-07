
import React from "react";
import Tabs from "./components/tabs";
import Task from "./components/task-screen";
import Map from "./components/map-screen";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./components/whitepaper-1.0.0.min.css";

function App() {
  return (
    <Router>
		<div className="App theme theme_color_whitepaper-default theme_size_default theme_space_default theme_font_museo theme_gap_small theme_breakpoint_default">
			<div className="App__layout">
				<div className="App__tabs">
					<Tabs />
				</div>
				<div className="App__content">
					<Route path="/" exact component={Task} />
					<Route path="/map/" component={Map} />
				</div>
				<div className="App__footer">
					<Footer />
				</div>
			</div>
		</div>
    </Router>
  );
}

export default App;
