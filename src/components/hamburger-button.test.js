import React from 'react';
import {shallow, mount} from 'enzyme';

import HamburgerButton from './hamburger-button';

describe('< HamburgerButton/>', () => {
    it('Renders without crashing', () => {
        shallow(<HamburgerButton/>);
    });
    
    
});