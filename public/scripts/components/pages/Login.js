import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return  {
			user: user,
			errors: {}
		};
	},
	
	render: function() {
		return (
			<section className="columns">
				<form onSubmit={this.login} className="login-box column is-half"> 
					<h1>log in</h1>
					<p className="control has-icon">
						<input className="input" type="email" placeholder="email" ref='email' title="please enter a valid email address" />
						<i className="fa fa-envelope"></i>
					</p>
					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null} </div>
					<p className="control has-icon">
						<input className="input" type="password" placeholder="Password" ref='password' title="please enter a valid password"  />
						<i className="fa fa-lock"></i>
					</p>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<p className="control">
						<button type="submit" className="button is-primary">Login</button>
					</p>
				</form>
			</section>
		);
	},

	login: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/login',
			type: 'POST',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			
			success: (loggedArg) => {
				console.log('this is the loggedArg');
				console.log(loggedArg);
				this.state.user.set(loggedArg);
				console.log('get this id: ' + this.state.user.get('id'));
				browserHistory.push('/dashboard');
			},
			error: (errorArg) => {
				this.setState({errors: errorArg.responseJSON});
			}
		});
	}
});