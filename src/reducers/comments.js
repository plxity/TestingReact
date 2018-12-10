import {SAVE_COMMENT,FETCH_COMMENTS} from '../actions/type';
export default function(state=[],action){
    switch(action.type){
        case SAVE_COMMENT :
            return [...state,action.payload]
        case FETCH_COMMENTS:
            const posts= action.payload.data.map((comment)=>{
                comment.name
            })
            return [...state,posts]
        default:
            return state;
    }
}