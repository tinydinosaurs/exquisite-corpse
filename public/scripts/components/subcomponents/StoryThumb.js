import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="story-box column is-6">
				<img src={this.props.coverImage} />
					<h2>{this.props.title}</h2>
					<p>Favor packaging over toy intently stare at the same spot, and hide when guests come over. Dream about hunting birds.</p>
					<Link to={`/read/${this.props.id}`}>Read story</Link>
			</div>
		);
	}
});