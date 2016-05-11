import React from 'react';
import story from '../../models/StoryModel';
import EntryList from '../subcomponents/EntryList';
// import entry from '../../collections/EntryCollection';

export default React.createClass({
	getInitialState: function() {
		return ({
			story: new story(
				{
					id: this.props.params.storyId
				}
			)
		});
	},

	componentDidMount: function() {
		console.log('component mounted.');
		this.state.story.fetch({
			data: {
				withRelated: ['entry']
			}
		});

		this.state.story.on('change', this.updateStory);
	},

	componentWillUnmount: function() {
		this.state.story.off('change', this.updateStory);
	},

	updateStory: function() {
		this.setState({story: this.state.story});
	},

	render: function() {
		console.log(this.state.story.get('title'));
		let entryArray = this.state.story.get('entry');
		console.log(entryArray);

		if(!entryArray) {
			entryArray = [];
			return <div></div>;
		} 
			
		const eachEntry = entryArray.map((val, i, arr) => {
			console.log(val.content);
			return (
				<EntryList 
					key={val.id}
					id={val.id}
					content={val.content}
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




		// if(!entryArray) {
		// 	entryArray = [];
		// 	return (
		// 	<section>{entryArray}</section>
		// 	);
		// } else {
		// 	const eachEntry = entryArray.map();
		// }
