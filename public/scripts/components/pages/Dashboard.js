import React from 'react';
import user from '../../models/UserModel';
import Stories from '../../collections/StoryCollection';
import StoryThumb from '../subcomponents/StoryThumb';

export default React.createClass({
	getInitialState: function() {
		console.log('this is the dashboard initial state');
		return (
			{
				user: user,
				Stories: Stories
			}
		);
	},

	componentDidMount: function() {
		console.log('did my dashboard component mount?');
		console.log(Stories);
		Stories.on('update', this.updateStories);
		Stories.fetch();
	},

	componentWillUnmount: function() {
		Stories.off('update', this.updateStories);
	},
	
	updateStories: function() {
		console.log('update dashboard stories');
		this.setState({Stories: Stories});
	},

	render: function() {
		const storiesList = this.state.Stories.map( (val, i, arr) => {
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