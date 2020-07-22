import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<Fragment>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">HOME</Link>
                            <button type="button" className="navbar-toggle" data-target="#nav" data-toggle="collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="nav">
                            <div className="nav navbar-nav">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </div>
                            <div className="nav navbar-nav navbar-right">
                                <li><Link to="/login">Log in</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br />
			</Fragment>
		);
	}
}

export default Nav;