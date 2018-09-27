import React from 'react';
import {connect} from 'react-redux';
import SignUpForm from './signup-form';
import {Link, Redirect} from 'react-router-dom';

export function SignUp(props) {
	// If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
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

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUp);