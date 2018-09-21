import React from 'react';

export default function LoginForm() {
	return (
		<form role="form" className="login">
					<fieldset name="login-info">
						<div className="login-header">
							<legend align="center">Log In</legend>
				   		 </div>
				    	<p id='notification'></p>

						<label htmlFor="email" required>Email</label>
						<input type="email" name="email" id="email" placeholder="Email address" required=""/>
						<label htmlFor="password" required>Password</label>
						<input type="password" name="password" id="password" placeholder="Password" required/>
					</fieldset>
					<button type="submit" className="js-login-button">Login</button>
					<p>Don't have an account? <a href="" className="nav-signup">Sign up</a></p>
				</form>
		)
}