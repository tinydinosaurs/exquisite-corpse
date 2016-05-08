import React from 'react';
import $ from 'jquery';
import story from '../../models/StoryModel';
import entry from '../../collections/EntryCollection';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		console.log('this is the initial state, yo');
		return {
			story: story,
			user: user		
		};
	},

	render: function() {
		return (
			<section>
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
	},

	startStory: function(e) {
		e.preventDefault();
		console.log(this.state.story.title);
		console.log(this.state.user);
		console.log(this.refs.title.value);
		// $.ajax({
		// 	url: '/api/v1/story',
		// 	type: 'POST',
		// 	data: {}
		// });
	}
});

// future functionality: random title generator