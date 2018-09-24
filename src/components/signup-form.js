import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUpForm() {
	return (
		<form role="form" className="signup">
					<fieldset name="signup-info">
						<div className="login-header">
							<legend align="center">Sign Up</legend>
				   		 </div>
				    	<p id='notification'></p>

						<label htmlFor="email" required>Email</label>
						<input type="email" name="email" id="email" placeholder="Email address" required="" />
						<label htmlFor="password" required>Password</label>
						<input type="password" name="password" id="password" placeholder="Password" required />
						<label htmlFor="password-confirm" required>Confirm password</label>
						<input type="password" name="password" id="password-confirm" placeholder="Confirm password" required />
				</fieldset>
					<button type="submit" className="js-login-button">Login</button>
					<p className="login-here">Already have an account? <Link to="/login">Log in</Link></p>
				</form>
		)
}