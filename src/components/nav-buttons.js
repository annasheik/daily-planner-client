import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


export class NavButtons extends React.Component {
	logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

	render() {
		 // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        }
        let logInButton;
        let signUpButton;
        if(!(this.props.loggedIn)) {
        	logInButton = (<Link to="/login">Sign In</Link>);
        	signUpButton = (<Link to="/signup">Join</Link>);
        }
	return(
		<ul className="nav-links">
				<li>{logInButton}</li>
				<li>{signUpButton}</li>
				<li>{logOutButton}</li>
			</ul>
		)}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavButtons);