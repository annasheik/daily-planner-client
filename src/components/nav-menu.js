import React from 'react';
import {Link} from 'react-router-dom';

export default function NavMenu(props) {
	return(
	  <ul id="menu">
      <Link to="/" onClick={props.onChange}><li>Home</li></Link>
      <Link to="/dashboard" onClick={props.onChange}><li>Next 7 days</li></Link>
      <li>Monthly goals</li>
      <li>Yearly goals</li>
      <Link to="/productivity-tips" onClick={props.onChange}><li>Productivity tips</li></Link>
      
    </ul>
		)
}