import React from 'react'
import { shallow } from 'enzyme'
import { NavButtons } from './nav-buttons'

describe('< NavButtons/>', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<NavButtons dispatch={dispatch} />);
    })
})