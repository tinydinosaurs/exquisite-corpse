import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="story-entries">
				{this.props.content}
			</div>
		);
	}
});