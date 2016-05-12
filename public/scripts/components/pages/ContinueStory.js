import React from 'react';
import $ from 'jquery';
import story from '../../models/StoryModel';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return ({
			user: user,
			story: new story(
				{
					id: this.props.params.storyId
				}
			)
		});
	},

	componentDidMount: function() {
		console.log('did my component mount?');
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
		let entryArray = this.state.story.get('entry');
		if(!entryArray) {
			entryArray = [];
			return <div></div>;
		}
		console.log('did you have to let it render...');
		let entrySnippet = entryArray[entryArray.length - 1].content.substr(-220);
		console.log(entryArray.length);
		console.log(entryArray);
		return (
			<section className="compose">
				<h1>Continue a story</h1>
				<p>...{entrySnippet}</p>
				<form onSubmit={this.continueStory} className="story-form">
					<p className="control">
						<textarea className="textarea" placeholder="start writing!" ref="compose"></textarea>
					</p>
					<p className="control">
						<button className="button is-primary">Submit</button>
					</p>
				</form>
			</section>
		);
	},

	continueStory: function(e) {
		e.preventDefault();
		console.log('content: ' + this.refs.compose.value);
		console.log('user id: ' + this.state.user.id);
		console.log('story id: ' + this.props.params.storyId);
		let entryOrder = this.state.story.get('entry').length;
		console.log(entryOrder);
		$.ajax({
			url: '/api/v1/entry',
			type: 'POST',
			data: {
				content: this.refs.compose.value,
				userId: this.state.user.id,
				storyId: this.props.params.storyId,
				order: entryOrder
			},
			headers: {
				Accept: 'application/json'
			},
			success: (entryAdded) => {
				console.log(entryAdded);
			},
			error: (errorArg) => {
				console.log('something went horribly wrong');
			}
		});			
	}
});

