import React from 'react';
import {shallow, mount} from 'enzyme';

import {Checkbox} from './checkbox';

describe('< Dashboard/>', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Checkbox tasks={[]} dispatch={dispatch}/>);
    });
    
    
});