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
		entries.on('update', this.updateEntries);
		stories.fetch();
		entries.fetch();
	},

	componentWillUnmount: function() {
		stories.off('update', this.updateStories);
		entries.off('update', this.updateEntries);
	},

	updateStories: function() {
		console.log('update home page stories');
		this.setState({stories: stories});
	},

	updateEntries: function() {
		console.log('update entries');
		this.setState({entries: entries});
	},

	render: function() {
		const storiesList = this.state.stories.map( (val, i, arr) => {
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
				<div className="hero is-large">
					<h1 className="title">...join the story</h1>
				</div>
				<div className="list-section">
					<h1>recently completed stories</h1>
					<div className="complete-stories columns">
						{storiesList}
					</div>
				</div>	
			</section>
			);
	}
});