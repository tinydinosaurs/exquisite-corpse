import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<section>
				<h1>Register now!</h1>
				<p>Register with us to start or join a collaborative story.</p>

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
					<label className="label">email</label>
					<p className="control">
  						<input className="input" type="email" ref="email" placeholder="email" />
  					</p>
					<label className="label">password</label>
					<p className="control">
  						<input className="input" type="text" ref="password" placeholder="password" />
  					</p>
					<label className="label">confirm password</label>
					<p className="control">
  						<input className="input" type="text" ref="confirmPass" placeholder="confirm password" />
  					</p>
  					<p className="control">
						<button type="submit" className="button is-primary">Login</button>
					</p>
				</form>

			</section>
		);
	}
});