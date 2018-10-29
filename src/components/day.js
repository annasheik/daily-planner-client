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
    addTask(task, index) {
    	this.props.dispatch(addTask(task, index));
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
			{this.state.isHidden ? null : (<AddNewTask onCancel={() => this.addTaskHandler()} onAdd={(task, index) => this.addTask(task, this.props.index)} />)}
			{console.log(this.props.index)}
			{console.log(this.state.isHidden)}

			</div>
			
				{Object.keys(this.props.tasks || {}).length > 0 ?
			<Checkbox index={this.props.index}
			tasks={this.props.tasks} /> : <p>No tasks yet</p> }
		    
			
		</div>
		)
		}
	
}

export default connect()(Day);
//{this.props.tasks.length > 0 ? 