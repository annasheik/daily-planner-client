import React from 'react';

export default class AddNewTask extends React.Component {
	 constructor(props) {
        super(props);
       

        this.onSubmit = this.onSubmit.bind(this);
    }
	onSubmit(event) {
		event.preventDefault();
		const task = this.textInput.value.trim();
	    const index = this.props.index;
	    const date = this.props.date;

	  
		 if (task && this.props.onAdd) {
            this.props.onAdd(this.textInput.value, index, date);
            this.props.onCancel();
        }
        this.textInput.value = '';
	}

	render() {
		return (
		<section className="add-task-section">
			<form className="add-task" role="form" onSubmit={this.onSubmit}>
				<legend>Add new task</legend>
				<label htmlFor="task" required></label>
				<input type="text" name="task" id="task"  ref={input => this.textInput = input}/>
				<button>Add</button>
				<button type="button" onClick={() => this.props.onCancel()}>Cancel</button>
				</form>
			</section>
		)}
}