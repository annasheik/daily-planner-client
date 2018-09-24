import React from 'react';
import Quote from './quote';
import Planner from './planner';

export default function Dashboard(props) {
	const randomNumber = Math.floor((Math.random() * props.quotes.length) + 1);
	const randomQuote = props.quotes[randomNumber];

	return (
		<div className="dashboard">
			<Quote 
			quote={randomQuote}
			/>
			<Planner tasks={props.tasks}
			/>
		</div>
		)
}