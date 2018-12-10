import {SAVE_COMMENT} from './type';
export function savecomment(comment){
    return{
        type: SAVE_COMMENT,
        payload:comment
    }
} 