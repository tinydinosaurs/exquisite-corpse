import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer'; 

export default React.createClass({
	render: function() {
		return (
			<div className="container">
				<Navigation />
				{this.props.children}
				<Footer />
			</div>
		);
	}
});