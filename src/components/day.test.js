import React from 'react';
import {shallow, mount} from 'enzyme';

import {Day} from './day';

describe('< Day/>', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Day tasks={[]} dispatch={dispatch}/>);
    });
    
    
});