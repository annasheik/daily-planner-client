import React from 'react';
import {connect} from 'react-redux';
import {deleteTask} from '../actions';

export class Checkbox extends React.Component {
  constructor(props) {
        super(props);
           }

 deleteTask(id, date) {
  
  console.log(id)
  this.props.dispatch(deleteTask(id, date));
  
 }
   
render() {
  
  const timestamps = Object.keys(this.props.tasks)
  
  const tasks = this.props.tasks.map((task, key) => {
    
           return(
          <li key={key}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{task.text}</label>
          <i className="fas fa-times" onClick={() => this.deleteTask(task.id, task.date)}></i>
        </li>)
      });
    
  
 
    
 

	return(
      <ul className="checkbox">
       {tasks}
      </ul>
      )
}
}
/*
  const mapStateToProps = state => {
   console.log(state)
   const {currentUser} = state.auth;
   return {
    tasks: state.index.tasks,
    quotes: state.index.quotes
}
}*/
export default connect()(Checkbox)