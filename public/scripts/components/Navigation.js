import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';
import user from '../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},

	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},

	render: function() {
		if(this.state.user.get('id')) {
			return(
				<nav>
					<Link to="/"><img src="" className="logo-img" /><span className='logo'>Exquisite Corpse</span></Link>
					<div className="nav-links">
						<Link className="nav-link" to='/start-story'>compose</Link>		
						<Link className="nav-link" to='/dashboard'>dashboard</Link>
						<a href="#" className="nav-link" onClick={this.logout}>log out</a>
					</div>	
				</nav>
			);
		} else {
			return (
				<nav>
					<Link to="/"><img src="" />Exquisite Corpse</Link>
					<div className="nav-links">
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


