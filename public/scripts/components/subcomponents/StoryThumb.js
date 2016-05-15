import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="column is-half">
				<div className="story-box">
					<img src={this.props.coverImage} />
					<h2>{this.props.title}</h2>
					<div className='preview-text'>
						<p>{this.props.content}...</p>
					</div>
					<Link to={`/${this.props.urlPath}/${this.props.id}`}>Go to story</Link>
				</div>
			</div>
		);
	}
});