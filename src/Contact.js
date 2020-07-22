import React, {Component, Fragment} from "react";
import Nav from "./Nav";

class Contact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email : "", subject : "", message : "",
			emailStyle : {}, subjectStyle : {}, 
			messageStyle : {}
		}
	}

	SubmitHandler = () => {
		let email = this.state.email;
		let subject = this.state.subject;
		let message = this.state.message;

		if(email == null || email == "" || email.length == 0) {
			this.setState({
				emailStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else if(subject == null || subject == "" || subject.length == 0) {
			this.setState({
				subjectStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else if(message == null || message == "" || message.length == 0) {
			this.setState({
				messageStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				emailStyle : {border: "2px solid green",color: "green"},
				subjectStyle : {border: "2px solid green",color: "green"},
				messageStyle : {border: "2px solid green",color: "green"}
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

	SubjectChange = (event) => {
		this.setState({subject : event.target.value});
		if(this.state.subject == null || this.state.subject == "" || this.state.subject.length == 0) {
			this.setState({
				subjectStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				subjectStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}

	MsgChange = (event) => {
		this.setState({message : event.target.value});
		if(this.state.message == null || this.state.message == "" || this.state.message.length == 0) {
			this.setState({
				messageStyle : {
					border: "2px solid red",
					color: "red"
				}
			});
		}else {
			this.setState({
				messageStyle : {
					border: "2px solid green",
					color: "green"
				}
			});
		}
	}

	render() {
		return (
			<Fragment>
				<Nav />
                <div className="container">
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
							<label for="subject">Subject</label>
							<input type="text"
								onChange={this.SubjectChange}
								placeholder="Subject"
								className="form-control"
								name="subject"  style={this.state.subjectStyle} />
						</div>
						<div className="form-group">
							<label for="email">Message</label>
							<textarea 
								placeholder="Letter..."
								className="form-control"
								onChange={this.MsgChange} style={this.state.messageStyle} ></textarea>
						</div>
						<div className="form-group">
							<input type="button" value="Send" className="btn btn-primary" onClick={this.SubmitHandler}/>
						</div>
					</form>
                </div><br /><br />
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

export default Contact;