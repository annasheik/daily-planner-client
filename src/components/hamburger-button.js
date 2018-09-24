import React from 'react';
import NavMenu from './nav-menu';

export default class HamburgerButton extends React.Component {
	 constructor(props) {
        super(props);
       

        this.hideCheckbox = this.hideCheckbox.bind(this);
    }
	hideCheckbox() {
		this.checkbox.checked = false;
	}

	render() {
	return(
		<div id="menuToggle">
    <input type="checkbox" ref={input => this.checkbox = input}/>
    <span></span>
    <span></span>
    <span></span>
    <NavMenu  onChange={() => this.hideCheckbox()}/>
    </div>
		)
	}
}