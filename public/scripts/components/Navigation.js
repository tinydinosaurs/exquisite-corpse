import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import user from '../models/userModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},

	componentDidMount: function() {
		console.log(this.state.user.get('id'));
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
			console.log(this.state.user.get('id'));
		});
	},

	render: function() {		
		if(this.state.user.get('id')) {
			return(
				<nav>
					<Link to="/"><img src="" />Exquisite Corpse</Link>
					<Link className="nav-link" to='/start-story'>compose</Link>		
					<Link className="nav-link" to='/continue-story'>continue</Link>
					<a href="#" className="nav-links" onClick={this.logout}>Logout</a>				
				</nav>
			);
		} else {
			return (
				<nav>
					<Link to="/"><img src="" />Exquisite Corpse</Link>
					<div className="nav-links">
						<Link className="nav-link" to='/read-story'>read</Link>
						<Link className="nav-link" to='/login'>log in</Link>
						<Link className="nav-link" to='/register'>register</Link>			
					</div>
				</nav>
			);
		}	
	},

	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}
});


