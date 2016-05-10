import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="story-box column">
				<img src={this.props.coverImage} />
				<h2>{this.props.title}</h2>
				<p>story text goes here</p>
				<Link to={`/read/${this.props.id}`}>Read story</Link>
			</div>
		);
	}
});