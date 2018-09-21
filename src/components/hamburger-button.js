import React from 'react';
import NavMenu from './nav-menu';

export default function HamburgerButton() {
	return(
		<div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <NavMenu />
    </div>
		)
}