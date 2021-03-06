import React from 'react';
import user from '../../models/UserModel';
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
			if(story.get('entry').length === 6) {
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
					urlPath='read'
				/>
			);
		});	

		return (
			<section className="home">
				<div className="hero is-large">
					<h1 className="title">...join the story</h1>
				</div>
				<div className="list-section">
					<h1>Recently completed stories</h1>
					<div className="stories columns is-multiline">
						{storiesList}
					</div>
				</div>	
			</section>
		);
	}
});