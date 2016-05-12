import React from 'react';
import $ from 'jquery';
import Story from '../../models/StoryModel';
import entry from '../../models/EntryModel';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		console.log('this is my initial state');
		return {
			story: Story,
			user: user,
			entry: entry		
		};
	},

	render: function() {
		return (
			<section className="compose">
				<h1>Start a story</h1>
				<p>So you're ready to start a story, huh? Awesome. You'll need to give your story a title before you submit. Obviously, you'll also need to write something. Keep it clean and don't be a jerk. Otherwise, anything goes!</p>
				<form onSubmit={this.startStory} className="story-form">
					<label className="label">give it a title!</label>
					<p className="control">
						<input className="input" type="text" placeholder="story title" ref="title" />
					</p>
					<label className="label">write something!</label>
					<p className="control">
						<textarea className="textarea" placeholder="start writing" ref="compose"></textarea>
					</p>
					<p className="control">
						<button className="button is-primary">Submit</button>
					</p>
				</form>
			</section>
			);
	}, //end render function

	startStory: function(e) {
		e.preventDefault();
		console.log(this.state.user.id);
		console.log(this.refs.title.value);
		$.ajax({
			url: '/api/v1/story',
			type: 'POST',
			data: {
				title: this.refs.title.value,
				userId: this.state.user.id,
				coverImage: ''
			},
			headers: {
				Accept: 'application/json'
			},
			success: (data) => {
				console.log(data);
				console.log(data.id);
				$.ajax({
					url: '/api/v1/entry',
					type: 'POST',
					data: {
						storyId: data.id,
						userId: this.state.user.id,
						content: this.refs.compose.value,
						order: 0
					},
					header: {
						Accept: 'application/json'
					},
					success: (entryAdded) => {
						console.log(entryAdded);
					},
					error: (entryError) => {
						console.log('entry addition failed');
					}
				});
			},
			error: (errorArg) => {
				console.log('something went horribly wrong');
			}
		});
	}
}); 

// future functionality: random title generator
