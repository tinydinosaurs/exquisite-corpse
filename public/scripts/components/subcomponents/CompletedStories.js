import React from 'react';
import stories from '../../collections/StoryCollection';


export default React.createClass({
	componentDidMount: function() {
		return (
			{
				stories: stories
			}
		);
	},

	render: function() {
		return (
			<article className="story-list">
			</article>
		);
	}
});