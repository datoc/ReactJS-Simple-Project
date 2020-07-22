import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email : "",
			pass : "",
			emailStyle : {},
			passwordStyle : {}
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
		let email = this.state.email;
		let pass = this.state.pass;
		
		if(email == null || email == "" || email.length == 0) {
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
				<br/><br/><br/><br/><br/><br/>
                <div className="container">
					<div className="panel panel-default col-md-offset-3 col-lg-offset-3" style={{width : "500px"}}>
						<div className="panel-heading text-center"><p>Log&nbsp;in or <Link to="/signup">Sign up</Link></p></div>
						<div class="panel-body">
							<form method="post">
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
									<label for="remember">Remember password?&nbsp;&nbsp;<input type="checkbox" name="remember" /></label>
								</div>
								<div className="form-group">
									<input type="button" value="Log in" className="btn btn-primary" onClick={this.SubmitHandler}/>
									&nbsp;&nbsp;&nbsp;<a href="#" className="pull-right">Forgot password?</a>
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

export default Login;