import React from 'react';
import {Link} from 'react-router';


export default React.createClass({
	render: function() {
		return (
			<section className="confirm">
				<h1>thanks for your submission!</h1>
				<p>Your content has been successfully submitted. Where do you want to go now?</p>
				<ul>
					<li><Link to="/dashboard">Take me to my dashboard!</Link></li>
					<li><Link to="/">Take me to the home page!</Link></li>
					<li><Link to="/start-story">Take me to the start new story page!</Link></li>
				</ul>
			</section>
		);
	}
});