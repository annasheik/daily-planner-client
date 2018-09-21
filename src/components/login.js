import React from 'react';
import LoginForm from './login-form';



export default function Login() {
	return (
			<section className="login-screen" aria-live="assertive">
				<LoginForm />
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