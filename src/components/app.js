import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react'
import Header from './header';
import Main from './main'
import Footer from './footer'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';




export class App extends React.Component {
	componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }
    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }


	render() {
     
	return (
		//<Router>
		<div className="app">
		<Header />
		<Main />
		<Footer />
		</div>
	   //</Router>
		)}

}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
});


//Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));



