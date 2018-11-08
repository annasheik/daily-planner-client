import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from './sign-up';

describe('< SignUp/>', () => {
    it('Renders without crashing', () => {
        shallow(<SignUp />);
    })
})