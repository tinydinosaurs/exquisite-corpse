import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="story-box column is-6">
				<img src={this.props.coverImage} />
					<h2>{this.props.title}</h2>
					<p>{this.props.content}...</p>
					<Link to={`/${this.props.urlPath}/${this.props.id}`}>Go to {this.props.title}</Link>
			</div>
		);
	}
});