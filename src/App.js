import React, { Component } from "react";
import TaskSection from "./components/task-section";
import Manifest from "./components/manifest";
import Footer from "./components/footer";
import Tabs from "./components/tabs";
//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (

			/* Face page */
			<div className="App">
				<div className="App__layout">
					<div className="App__tabs">
						<Tabs />
					</div>
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
			/* /Face page */


			/* Face page */
			// <div className="App">
			// 	<div className="App__layout">
			// 		<div className="App__tabs">
			// 			<Tabs />
			// 		</div>
			// 		<div className="App__content">
			// 			<div className="App__main">
			// 				<h1>Add new data sources to Ossert: Reddit</h1>
			// 				<p>We need to come up with a new API for PostCSS plugins - so that they all work together, in one cycle of walking through the AST tree.</p>
			// 				<p>The task is difficult. It is less about code and more about negotiation, analysis and architecture. But it gives the maximum amount of experience.</p>
			// 				<p>Advantage: to become one of the leading committers of PostCSS, add to the resume a line on the development of competent architecture in a global project.</p>
			// 			</div>
			// 			<div className="App__aside">
			// 				<div class="details">
			// 					<div class="details__content">
			// 						<div class="statistic">
			// 							<div class="statistic__item">
			// 								<div class="statistic__label">Сomments:</div>
			// 								<div class="statistic__value">12</div>
			// 							</div>
			// 							<div class="statistic__item">
			// 								<div class="statistic__label">Create Date:</div>
			// 								<div class="statistic__value">23 October</div>
			// 							</div>
			// 							<div class="statistic__item">
			// 								<div class="statistic__label">Type:</div>
			// 								<div class="statistic__value">Backend</div>
			// 							</div>
			// 							<div class="statistic__item">
			// 								<div class="statistic__label">Update date:</div>
			// 								<div class="statistic__value">23 October</div>
			// 							</div>
			// 							<div class="statistic__item">
			// 								<div class="statistic__label">Contributors:</div>
			// 								<div class="statistic__value">256</div>
			// 							</div>
			// 						</div>
			// 					</div>
			// 					<div class="details__action">
			// 						<div class="details__join">
			// 							Join
			// 						</div>
			// 						<div class="details__action">
			// 							Donate
			// 						</div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div class="App__messages">
			// 			Commit App__messages
			// 		</div>
			// 		<div className="App__footer">
			// 			<Footer />
			// 		</div>
			// 	</div>
			// </div>
		
		/* /Face page */

		);
	}
}

export default App;
