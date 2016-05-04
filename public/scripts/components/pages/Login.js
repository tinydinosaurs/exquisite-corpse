import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<section>
				<form className="login-box"> <h1>log in</h1>
					<input className="" type="text" placeholder="username" ref='username' title="please enter a valid username" required="required"/>
					<div className="error">{this.state.errors.username ? this.state.errors.username.message : null} </div> 
					<input className="" type="password" placeholder="password" ref='password' title="please enter a valid password" required="required"/>
					<div className="error">{this.state.errors.password ? this.state.errors.password.message : null}</div>
					<button className="" type='submit'> Login </button>
				</form>
			</section>
		);
	}
});