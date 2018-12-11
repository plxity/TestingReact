import {SAVE_COMMENT,FETCH_COMMENTS,CHANGE_AUTH} from './type';
import axios from 'axios';
export function savecomment(comment){
    return{
        type: SAVE_COMMENT,
        payload:comment
    }
} 

export function fetchcomments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')
    return{
        type:FETCH_COMMENTS,
        payload:response
          
    }
}
export function changeauth( isLoggedin){
    return{
        type:CHANGE_AUTH,
        payload:isLoggedin
    }
}