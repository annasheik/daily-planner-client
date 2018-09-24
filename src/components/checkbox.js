import React from 'react';
import {connect} from 'react-redux';
import {deleteTask} from '../actions';

export class Checkbox extends React.Component {
  constructor(props) {
        super(props);
           }

 deleteTask(index, key) {
  this.props.dispatch(deleteTask(index, key));
  
 }

render() {
  console.log(this.props.tasks)
  const tasks =  this.props.tasks.map((task, key) => {
          return (<li key={key}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{task}</label>
          <i className="fas fa-times" onClick={(index, key) => this.deleteTask(this.props.index, key)}></i>
        </li>)
      }
      );

	return(
      <ul className="checkbox">
       {tasks}
      </ul>
      )
}
}

export default connect()(Checkbox);