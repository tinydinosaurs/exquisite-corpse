import React from 'react';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<nav>
				<Link to="/"><img src="" />Exquisite Corpse</Link>
				<div className="nav-links">
					<Link className="nav-link" to='/read-story'>read</Link>		
					<Link className="nav-link" to='/start-story'>compose</Link>		
					<Link className="nav-link" to='/login'>log in</Link>
				</div>
			</nav>
		);
	}
});