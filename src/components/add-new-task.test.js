import React from 'react';
import {shallow, mount} from 'enzyme';

import AddNewTask from './add-new-task';

describe('< AddNewTask/>', () => {
    it('Renders without crashing', () => {
        shallow(<AddNewTask />);
    });
    
    it('Should fire the onAdd callback when the form is submitted', () => {
     	const callback = jest.fn();
        const wrapper = mount(<AddNewTask onAdd={callback} />);
        const value = 'Foobar';
        //wrapper.update();
        wrapper.find('input[type="text"]').instance().value = value;
        wrapper.simulate('submit');
        
    });
    it('Should not fire onAdd if the input is empty', () => {
        const callback = jest.fn();
        const wrapper = mount(<AddNewTask onAdd={callback} />);
        wrapper.instance();
        wrapper.simulate('submit');
        expect(callback).not.toHaveBeenCalled();
    });
});