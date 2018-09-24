export const ADD_TASK = 'ADD_TASK';
export const addTask = (task, index) => ({
	type: ADD_TASK,
	task,
	index
})

export const DELETE_TASK = 'DELETE_TASK';
export const deleteTask = (index, key) => ({
	type: DELETE_TASK,
	index,
	key
})