import React from 'react';
import stories from '../../collections/StoryCollection';
import entries from '../../collections/EntryCollection';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			stories: stories,
			entries: entries
		};
	},

	componentDidMount: function() {
		console.log('did my continue story component mount?');
		entries.on('update', this.updateEntries);
		entries.fetch();
	},

	componentWillUnmount: function() {
		entries.off('update', this.updateEntries);
	},

	updateEntries: function() {
		this.setState({entries: entries});
	},

	render: function() {
		console.log(entries);
		console.log(entries.models);
		console.log(entries.models[0]);
		return (
			<section>
				<h1>Continue a story</h1>
				<p>fetch story</p>
				<form onSubmit={this.continueStory}>
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

	continueStory: function(e) {
		e.preventDefault();
		console.log('clickety click click');
		console.log(this.state.user.id);
		console.log(this.state.story.id);
	}
});