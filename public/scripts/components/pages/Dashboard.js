import React from 'react';
import stories from '../../collections/StoryCollection';
import entries from '../../collections/EntryCollection';
import StoryThumb from '../subcomponents/StoryThumb';

export default React.createClass({
	getInitialState: function() {
		return (
			{
				user: user,
				stories: stories,
				entries: entries
			}
		);
	},

	componentDidMount: function() {
		stories.on('update', this.updateStories);
		stories.fetch({
			data: {
				withRelated: ['entry']
			}
		});
	},

	componentWillUnmount: function() {
		stories.off('update', this.updateStories);
	},

	updateStories: function() {
		this.setState({stories: stories});
	},


	render: function() {

		const filterStories = this.state.stories.filter((story, i, arr) => {
			if(story.get('entry') && story.get('entry').length > 0 && story.get('entry').length < 6) {
				return story;
			} // end if statement
		}); // end filterStories

		const storiesList = filterStories.map( (val, i, arr) => {
			return (
				<StoryThumb 
					key={val.get('id')}
					id={val.get('id')}
					title={val.get('title')}
					coverImage={val.get('coverImage')}
					content={val.get('entry')[0].content}
					urlPath='continue'
				/>
			);
		});	
		return (
			<section className="dashboard">
				<div>
					<h1>Welcome, human</h1>
					<p>The following stories are incomplete and are ready for your contribution. Select one and get to writing!</p>
					<div className="stories columns is-multiline">
						{storiesList}
					</div>	
				</div>
			</section>
		);
	}
});