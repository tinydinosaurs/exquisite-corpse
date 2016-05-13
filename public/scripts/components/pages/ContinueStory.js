import React from 'react';
import $ from 'jquery';
import entries from '../../collections/EntryCollection';
import user from '../../models/UserModel';
import {browserHistory} from 'react-router';

export default React.createClass({
	getInitialState: function() {
		return ({
			user: user,
			entries: entries
		});
	},

	componentDidMount: function() {
		console.log('did my component mount?');

		this.state.entries.fetch({
			data: {
				where: {
					storyId: this.props.params.storyId
				}
			}
		});
		this.state.entries.on('update', this.updateEntries);
	},

	componentWillUnmount: function() {
		this.state.entries.off('update', this.updateEntries);		
	},

	updateEntries: function() {
		this.setState({entries: this.state.entries});
	},

	render: function() {
		let entryArray = this.state.entries;
		if(!entryArray.length) {
			entryArray = [];
			return <div></div>;
		}
		console.log('did you have to let it render...');
		let entrySnippet = entryArray.at(entryArray.length-1).get('content').substr(-220);
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
		let entryOrder = this.state.entries.length;
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
				browserHistory.push('/confirmation');
			},
			error: (errorArg) => {
				console.log('something went horribly wrong');
			}
		});			
	}
});

