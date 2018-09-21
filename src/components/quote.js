import React from 'react';

export default function Quote(props) {
	return (
		<section className="quote">
			<p>{props.quote}</p>
		</section>
		)
}