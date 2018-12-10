import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise'; 

export default (props)=>{
    const store=    
            createStore(    reducers,
                            props.initialState,
                            applyMiddleware(reduxPromise)
                        )
    return(
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}