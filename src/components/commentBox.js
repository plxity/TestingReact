import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions  from '../actions';


class CommentBox extends Component {
    state={comment:''}
    handleChange =(event)=>{
        this.setState({comment: event.target.value});
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.savecomment(this.state.comment);
        this.setState({comment:''})
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h4>Add a component</h4>
            <textarea value={this.state.comment} onChange={this.handleChange}/>
            <div>
                <button>Submit Comment</button>
            </div>

        </form>
      </div>
    )
  }
}
export default connect(null,actions)(CommentBox);