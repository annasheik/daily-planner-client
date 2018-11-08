import React from 'react'
import { shallow } from 'enzyme'
import { Planner } from './planner'

describe('< Planner/>', () => {
    it('Renders without crashing', () => {
        shallow(<Planner tasks={[]} />);
    })
})