import React from 'react'
import Comments from './Comments'

import { shallow, mount, render } from 'enzyme'


describe('<Comments />', () => {

    it('renders without crashing', () => {
        const comments = {
            1: {
                comment: 'test 1'
            },
            2: {
                comment: 'test 2'
            },
        }

        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.find('Comment').length).toBe(2)
        //expect(wrapper.text()).toBe(comments.comments)
    })


})