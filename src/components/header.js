import React from 'react';
import {Link} from 'react-router-dom';
import Login from './login';
import SignUp from './sign-up';
import NavButtons from './nav-buttons';
import HamburgerButton from './hamburger-button';
import LandingPage from './landing-page';

export default function Header() {
	return (
          <nav role="navigation">
          <HamburgerButton />
		  <h2 className="logo"><Link to="/">Daily Planner</Link></h2>
		  <NavButtons />
		</nav>
		)
}