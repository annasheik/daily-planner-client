import React from 'react';
import Quote from './quote';
import Planner from './planner';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchTasks} from '../actions/index';

export class Dashboard extends React.Component {

	componentWillMount() {
		console.log('Component will mount')
        this.props.dispatch(fetchTasks());
    }

    render() {
    	console.log(this.props.tasks) 
    	let randomQuote = "Random quote";
    	if (this.props.quotes && this.props.quotes.length) {
    	const randomNumber = Math.floor((Math.random() * this.props.quotes.length) + 1);
		randomQuote = this.props.quotes[randomNumber];
		}
		return (
			<div className="dashboard">
				<Quote 
				quote={randomQuote}
				/>
				<Planner tasks={this.props.tasks} username={this.props.username}
				/>
			</div>
		)}
	

}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
    tasks: state.index.tasks,
    quotes: state.index.quotes
}
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));