import React from 'react';
import {Link} from 'react-router-dom';


export default function NavButtons () {
	return(
		<ul className="nav-links">
				<li><Link to="/login">Sign In</Link></li>
				<li><Link to="/signup">Join</Link></li>
				<li><Link to="/">Log Out</Link></li>
			</ul>
		)
}