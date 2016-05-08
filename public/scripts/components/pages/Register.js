import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';
import user from '../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user,
			errors: {}
		};
	},

	render: function() {
		return (
			<section>
				<h1>Register now!</h1>

				<form className="register-form" onSubmit={this.register}>
					<label className="label">first name</label>
					<p className="control">
  						<input className="input" type="text" ref="firstName" placeholder="first name" />
  					</p>
					<label className="label">last name</label>
					<p className="control">
  						<input className="input" type="text" ref="lastName" placeholder="last name" />
  					</p>
					<label className="label">username</label>
					<p className="control">
  						<input className="input" type="text" ref="username" placeholder="username" />
  					</p>
  					<div className="error">{this.state.errors.username ? this.state.errors.username.message : null}</div>
					<label className="label">email</label>
					<p className="control">
  						<input className="input" type="email" ref="email" placeholder="email" />
  					</p>
  					<div className="error">{this.state.errors.email ? this.state.errors.email.message : null}</div>
					<label className="label">password</label>
					<p className="control">
  						<input className="input" type="text" ref="password" placeholder="password" />
  					</p>
  					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					{/*<label className="label">confirm password</label>
					<p className="control">
  						<input className="input" type="text" ref="confirmPass" placeholder="confirm password" />
  					</p>*/}
  					<p className="control">
						<button type="submit" className="button is-primary">Login</button>
					</p>
				</form>

			</section>
		);
	},

	register: function(e) {
		e.preventDefault();
		console.log('register is clickety');
		$.ajax({
			url: 'auth/register',
			type: 'POST',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				username: this.refs.username.value,
				email: this.refs.email.value,
				password: this.refs.password.value	
			},
			headers: {
				Accept: 'application/json'
			},
			success: (data) => {
				console.log(data);
				this.state.user.set(data);
				console.log(this.state.user);
				browserHistory.push('/dashboard');
			},
			error: (errorArg) => {
				console.log('error');
				console.log(errorArg);
				this.setState({errors: errorArg.responseJSON});
				// how do I add an error argument for username?
			}
		});
	}
});