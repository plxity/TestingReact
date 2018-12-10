import {SAVE_COMMENT} from '../type';
import {savecomment} from '../index';

describe('savecomment',()=>{
    it('Has the correct type',()=>{
        const action = savecomment();
        expect(action.type).toEqual(SAVE_COMMENT);
    })
    it('Has the correct payload',()=>{
        const action = savecomment('new comment')
        expect(action.payload).toEqual('new comment');
    })
})