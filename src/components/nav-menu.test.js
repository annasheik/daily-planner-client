import React from 'react'
import { shallow } from 'enzyme'
import NavMenu from './nav-menu'

describe('< NavMenu/>', () => {
    it('Renders without crashing', () => {
        shallow(<NavMenu />);
    })
})