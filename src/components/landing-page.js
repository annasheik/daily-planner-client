import React from 'react';
import Hero from './hero';
import OnBoarding from './onboarding';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';



export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
	return (
		<div>
		<Hero />
		<OnBoarding />
		</div>
		)
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);