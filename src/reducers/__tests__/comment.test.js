import commentReducer from '../comments';
import {SAVE_COMMENT}  from '../../actions/type';

it('handle action of type SAVE_COMMENT',()=>{
    const action = {
        type: SAVE_COMMENT,
        payload:'New Comment'
    };
    const newState = commentReducer([],action);
    expect(newState).toEqual(['New Comment']);
})
it('handle action of type which is not present',()=>{
    const newState = commentReducer([],{type:'it is not present'})
    expect(newState).toEqual([]);
})
