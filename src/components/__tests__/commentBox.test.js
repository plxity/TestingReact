import React from 'react';
import CommentBox from '../commentBox';
import enzyme from 'enzyme';
import {mount} from 'enzyme';
import Root from '../../root';
let wrapped;
beforeEach(()=>{
    wrapped= mount(
    <Root>
         <CommentBox/>
    </Root>
   )
})
afterEach(()=>{
    wrapped.unmount();
})
it('has comment box',()=>{

expect(wrapped.find('textarea').length).toEqual(1);
expect(wrapped.find('button').length).toEqual(1);
});
it('has a text area that users can type in',()=>{
   wrapped.find('textarea').simulate('change',{
    target  :{value:'new comment'}
   })

   wrapped.update()
   expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})
it('textarea cleared after submitting tht form',()=>{
    wrapped.find('textarea').simulate('change',{
    target  :{value:'new comment'}});
    wrapped.update()
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})