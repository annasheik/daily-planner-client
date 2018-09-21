import React from 'react';
import Header from './header';
import Main from './main'
import Footer from './footer'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';



export default function App(props) {
	return (
		<Router>
		<div>
		<Header />
		<Main quotes={props.quotes}
		tasks={props.tasks}/>
		<Footer />
		</div>
		</Router>
		)
}