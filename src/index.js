import React from 'react';
import ReactDOM  from 'react-dom';
import Root from './root';
import App from './components/app';
import {BrowserRouter,Route} from 'react-router-dom';
ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
        
    </Root>,
document.querySelector('#root'));

