import React from 'react';
import AddNewTask from './add-new-task';
import Checkbox from './checkbox';
import {connect} from 'react-redux';
import {addTask} from '../actions';

export class Day extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        }
    }
    addTask(task, index, date) {
    	
    	this.props.dispatch(addTask(task, index, date));
    }

   addTaskHandler = () => {
    this.setState({isHidden: !this.state.isHidden});
  };
	render() {
		
		return(
		<div>
			<div className="new-task">
				<button className="add-task" type="button" onClick={() => this.addTaskHandler()}>+ New</button>
			</div>
			<div id="new-task">
			{this.state.isHidden ? null : (<AddNewTask onCancel={() => this.addTaskHandler()} onAdd={(task, index, date) => this.addTask(task, this.props.index, this.props.date)} />)}
			

			</div>
			
				{Object.keys(this.props.tasks || {}).length > 0 ?
			<Checkbox index={this.props.index}
			tasks={this.props.tasks} /> : <p className="no-tasks">No tasks yet</p> }
		    
			
		</div>
		)
		}
	
}

/*const mapStateToProps = state => {
   console.log(state)
   const {currentUser} = state.auth;
   return {
   	username: state.auth.currentUser.username,
    //tasks: state.index.tasks,
    quotes: state.index.quotes
}
}*/

export default connect()(Day)
//{this.props.tasks.length > 0 ? 