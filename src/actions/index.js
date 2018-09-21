export const ADD_TASK = 'ADD_TASK';
export const addTask = (task, date) => ({
	type: ADD_TASK,
	task,
	date
})