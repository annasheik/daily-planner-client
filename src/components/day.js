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
    
    addTask(task) {

    	this.props.dispatch(addTask(task));
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
			{this.state.isHidden ? null : (<AddNewTask onAdd={(task, date) => this.addTask(task,  this.props.date)} />)}
			{console.log(this.state.isHidden)}

			</div>
			<Checkbox 
			tasks={this.props.tasks}
			
			/>
		</div>
		)
		}
	
}

export default connect()(Day);
