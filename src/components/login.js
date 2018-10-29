import React from 'react';
import LoginForm from './login-form';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';



export function Login(props) {
	if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
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
const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);