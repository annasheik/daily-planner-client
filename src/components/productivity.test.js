import React from 'react';
import { shallow } from 'enzyme';
import ProductivityPage from './productivity';

describe('< ProductivityPage/>', () => {
    it('Renders without crashing', () => {
        shallow(<ProductivityPage />);
    })
})