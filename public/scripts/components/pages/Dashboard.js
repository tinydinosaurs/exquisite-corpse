import React from 'react';
import user from '../../models/UserModel';

export default React.createClass({
	getIntialState: function() {
		return (
			{
				user: user
			}
		);
	},

	render: function() {
		return (
			<section className="home">
				<div>
					<h1 className="title">Welcome, human</h1>
				</div>
			</section>
			);
	}
});