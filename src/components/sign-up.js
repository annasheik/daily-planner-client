import React from 'react';
import SignUpForm from './signup-form';

export default function SignUp() {
	return(
		<section className="login-screen" aria-live="assertive">
			<SignUpForm />
			<div className="demo-account"> 
					<p>Demo account:</p>
					<ul>
             			<li>Username: demo@gmail.com</li>
             			<li>Password: password</li>
           	   		</ul>
           	   </div>
			</section> 
		)
}