import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name : "",
			pass : "",
			email : "",
			lastname : "",
			lastnameStyle : {},
			passwordStyle : {},
			emailStyle : {}
		}
	}

	NameChange = (event) => {
		this.setState({name : event.target.value});
		if(this.state.name == null || this.state.name == "" || this.state.name.length == 0) {
			this.setState({
				nameStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				nameStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}

	LastNameChange = (event) => {
		this.setState({lastname : event.target.value});
		if(this.state.lastname == null || this.state.lastname == "" || this.state.lastname.length == 0) {
			this.setState({
				lastnameStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				lastnameStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}

	EmailChange = (event) => {
		this.setState({email : event.target.value});
		if(this.state.email == null || this.state.email == "" || this.state.email.length == 0) {
			this.setState({
				emailStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				emailStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}

	passwordChange = (event) => {
		this.setState({pass : event.target.value});
		if(this.state.pass == null || this.state.pass == "" || this.state.pass.length == 0) {
			this.setState({
				passwordStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				passwordStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}
	
	SubmitHandler = () => {
		let name = this.state.name;
		let pass = this.state.pass;
		let lastname = this.state.lastname;
		let email = this.state.email;
		
		if(name == null || name == "" || name.length == 0) {
			this.setState({
				nameStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else if(lastname == null || lastname == "" || lastname.length == 0) {
			this.setState({
				lastnameStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else if(email == null || email == "" || email.length == 0) {
			this.setState({
				emailStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else if(pass == null || pass == "" || pass.length == 0) {
			this.setState({
				passwordStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}
	}

	render() {
		return (
			<Fragment>
				<br/><br/><br/><br/>
                <div className="container">
					<div className="panel panel-default col-md-offset-3 col-lg-offset-3" style={{width : "500px"}}>
						<div className="panel-heading text-center"><p>Sign&nbsp;up or <Link to="/login">Log in</Link></p></div>
						<div class="panel-body">
							<form method="post">
								<div className="form-group">
									<label for="name">Name</label>
									<input type="text"
										onChange={this.NameChange}
										placeholder="Name"
										className="form-control"
										name="name" style={this.state.nameStyle} />
								</div>
								<div className="form-group">
									<label for="lastname">Last</label>
									<input type="text"
										onChange={this.LastNameChange}
										placeholder="Last name"
										className="form-control"
										name="lastname" style={this.state.lastnameStyle} />
								</div>
								<div className="form-group">
									<label for="email">Email</label>
									<input type="text"
										onChange={this.EmailChange}
										placeholder="Email"
										className="form-control"
										name="email" style={this.state.emailStyle} />
								</div>
								<div className="form-group">
									<label for="password">password</label>
									<input type="password"
										onChange={this.passwordChange}
										placeholder="password"
										className="form-control"
										name="password"  style={this.state.passwordStyle} />
								</div>
								<div className="form-group">
									<input type="button" value="Sign up" className="btn btn-primary" onClick={this.SubmitHandler}/>
								</div>
							</form>
							<hr />
							<Link to="/">&larr;&nbsp;&nbsp;Back to home</Link>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Signup;