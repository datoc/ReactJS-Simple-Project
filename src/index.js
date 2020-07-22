import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home.";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import "./style.scss";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						<Route path="/" exact component={Home}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/contact" component={Contact}></Route>
						<Route path="/login" component={Login}></Route>
						<Route path="/signup" component={Signup}></Route>
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));