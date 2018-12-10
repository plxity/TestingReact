import React from 'react';
import CommentList from '../commentList';
import Root from '../../root';
import {mount} from 'enzyme';

let wrapped;
beforeEach(()=>{
    const initialState={
        comments: ['comment 1', 'comment 2']
    }
    wrapped= mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
})
afterEach(()=>{
    wrapped.unmount();
})
it('Renders only one LI tag per comment',()=>{
  expect(wrapped.find('li').length).toEqual(2)

})
it('Shows text for each LI tag',()=>{
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 1');
})