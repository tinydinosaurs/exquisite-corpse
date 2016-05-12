import React from 'react';
import Story from '../../models/StoryModel';
import EntryList from '../subcomponents/EntryList';
import entry from '../../collections/EntryCollection';

export default React.createClass({
	getInitialState: function() {
		return ({
			user: user,
			entry: entry,
			story: new Story({
				id: this.props.params.storyId
			})
		});
	},

	componentDidMount: function() {
		this.state.entry.fetch({
			data: {
				where: {
					storyId: this.props.params.storyId
				}
			}
		});

		this.state.story.fetch();

		this.state.entry.on('update', this.updateEntries);
		this.state.story.on('change', this.updateStory);
	},

	componentWillUnmount: function() {
		this.state.entry.off('update', this.updateEntries);
		this.state.story.off('change', this.updateStory);		

	},

	updateEntries: function() {
		this.setState({entry: this.state.entry});
	},

	updateStory: function() {
		this.setState({story: this.state.story});
	},

	render: function() {
		console.log('entries:');
		console.log(this.state.entry);
		let entryArray = this.state.entry.models;
		if(!entryArray.length) {
			entryArray = [];
			return <div></div>;
		} 
		console.log(this.state.story.get('title'));

		const eachEntry = entryArray.map((val, i, arr) => {
			return (
				<EntryList 
					key={val.get('id')}
					id={val.get('id')}
					content={val.get('content')}
				/>
			);
		});

		return (
			<section className="read-story">
				<h1>{this.state.story.get('title')}</h1>
				{eachEntry}
			</section>
		);
	}
});
