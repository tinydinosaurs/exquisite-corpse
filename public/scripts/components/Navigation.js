import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="/"><img src="" />Logo</Link>
				<Link className="nav-links" to='/read-story'>read</Link>		
				<Link className="nav-links" to='/start-story'>compose</Link>		
				<Link className="nav-links" to='/login'>log in</Link>
			</nav>
		);
	}
});