import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentBox from './commentBox';
import CommentList from './commentList';
import * as actions from '../actions';

class App extends Component{
 
    renderButton(){
        if(this.props.auth){
            return(
                <button onClick={()=>this.props.changeauth(false)}>SignOut</button>
            )
        }
        else{
            return(
                <button onClick={()=>this.props.changeauth(true)}>Sign In </button>
            )
        }

    }
    renderHeader(){
        return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post a comment</Link></li>
            <li>{this.renderButton()}</li>
        </ul>
        )
    }
    render( ){
        return ( 
        
        <div>
            {this.renderHeader()}
            <Route path= "/post" component={CommentBox}/>
            <Route path="/"  exact component={CommentList} />
        </div>
        );

    }

  
}
function mapStateToProps(state){
    return{
        auth:state.auth
    }

}
export default connect(mapStateToProps,actions)(App);