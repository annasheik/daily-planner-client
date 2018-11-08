import React from 'react'
import { shallow } from 'enzyme'
import Onboarding from './onboarding'

describe('< Onboarding/>', () => {
    it('Renders without crashing', () => {
        shallow(<Onboarding/>);
    })
})