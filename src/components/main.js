import React from 'react';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import Login from './login';
import SignUp from './sign-up';
import ProductivityPage from './productivity'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

export class Main extends React.Component {
	render() {
	return (<Switch>
		<div>
		<Route exact path="/" component={LandingPage} />
		<Route exact path="/dashboard" component={() => <Dashboard quotes={this.props.quotes} tasks={this.props.tasks}/>} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={SignUp} />
		<Route exact path="/productivity-tips" component={ProductivityPage} />
		</div>
		</Switch>
		)
}
}

const mapStateToProps = state => ({
    quotes: state.quotes,
    tasks: state.tasks
});

export default connect(mapStateToProps)(Main);
