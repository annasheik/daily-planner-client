import React from 'react';
import {Link} from 'react-router-dom';

export default function NavMenu() {
	return(
	  <ul id="menu">
      <Link to="/"><li>Home</li></Link>
      <Link to="/dashboard"><li>Next 7 days</li></Link>
      <li>Monthly goals</li>
      <li>Yearly goals</li>
      <Link to="/productivity-tips"><li>Productivity tips</li></Link>
      
    </ul>
		)
}