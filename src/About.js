import React, {Component, Fragment} from "react";
import Nav from "./Nav";

class About extends Component {
	render() {
		return (
			<Fragment>
				<Nav />
                <div className="container">
					<h1 className="text-center">About Us</h1>
					<br /><br />
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at nisi sed mi porta tempor. Etiam id mauris auctor, aliquet tortor non, ornare magna. Sed id mi lorem. Integer accumsan lacinia leo in cursus. Proin velit magna, scelerisque id luctus eu, dictum et ligula. Ut turpis est, luctus sed elit eget, posuere lobortis tellus. Vestibulum sollicitudin risus ac erat eleifend, at tincidunt turpis scelerisque. Ut eu scelerisque nisl. Proin vitae iaculis sapien. Ut tristique urna est. Praesent ullamcorper lorem sed dui eleifend, ac ornare mauris condimentum. Vivamus et facilisis magna. Quisque tristique bibendum vestibulum. Phasellus interdum luctus massa, at vehicula lectus vulputate non. Fusce fringilla scelerisque vehicula. Maecenas venenatis finibus auctor.
					<br/>
					Nullam hendrerit quam elit, a euismod dolor porttitor non. Sed consectetur orci sodales libero viverra semper. Nullam vehicula sodales finibus. Pellentesque est orci, rhoncus ut finibus eu, ullamcorper at leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat viverra lacinia. Sed ultricies ultricies leo, eget porttitor metus accumsan at.</p>
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

export default About;