import React from 'react';

export default React.createClass({
	render: function() {
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
	}
});