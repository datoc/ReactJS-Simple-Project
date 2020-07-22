import React, {Component, Fragment} from "react";
import axios from "axios";
import Nav from "./Nav";

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts : []
		}
	}

	componentDidMount() {
		axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
			this.setState({
				posts : response.data
			});
		});
	}

	render() {
		return (
			<Fragment>
				<Nav />
                <div className="container">
                    {
						this.state.posts.map(items => <div className="panel panel-primary col-lg-6 col-md-6 col-sm-12 col-xs-12">
							<div className="panel-heading"><h4>{items.title}</h4></div>
							<div className="panel-body"><p>{items.body}</p></div>
						</div> )
					}
					<br /><br />
                </div>
				<footer className="footer">
					<div className="container">
						<br />
						<p className="text-center">Created by David Chechelashvili</p>
					</div>
				</footer>
			</Fragment>
		);
	}
}

export default Home;