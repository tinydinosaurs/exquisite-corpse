import React from 'react';
import stories from '../../collections/StoryCollection';
import entries from '../../collections/EntryCollection';
import StoryThumb from '../subcomponents/StoryThumb';

export default React.createClass({
	getInitialState: function() {
		console.log('this is the dashboard initial state');
		return (
			{
				user: user,
				stories: stories,
				entries: entries
			}
		);
	},

	componentDidMount: function() {
		console.log('did my home page component mount?');
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
		console.log('update home page stories');
		this.setState({stories: stories});
	},


	render: function() {
		// console.log(this.state.stories.get('entry'));

		const filterStories = this.state.stories.filter((story, i, arr) => {
			if(story.get('entry').length < 6) {
				console.log(story);
				return story;
			} // end if statement
		}); // end filterStories

		const storiesList = filterStories.map( (val, i, arr) => {
			// console.log(val.get('entry'));
			return (
				<StoryThumb 
					key={val.get('id')}
					id={val.get('id')}
					title={val.get('title')}
					coverImage={val.get('coverImage')}
				/>
			);
		});	
		return (
			<section className="home">
				<div>
					<h1 className="title">Welcome, human</h1>
					<p>Here are some stories for your consideration</p>
					<div className="complete-stories columns">
						{storiesList}
					</div>	
				</div>
			</section>
		);
	}
});