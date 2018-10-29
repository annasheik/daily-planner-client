import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const TASKS_ERROR = 'TASKS_ERROR';
export const tasksError = error => ({
	type: TASKS_ERROR,
	error
})

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const fetchTasksSuccess = tasks => ({
	type: FETCH_TASKS_SUCCESS,
	tasks
})

export const fetchTasks = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/tasks`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => { 
            console.log(data)
            dispatch(fetchTasksSuccess(data.tasks))})
        .catch(err => {
            dispatch(tasksError(err));
        });
}

export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const addTaskSuccess = (task, index) => ({
	type: ADD_TASK_SUCCESS,
	task,
	index
})

export const addTask = (dispatch, getState, task, index) => {
	   const authToken = getState().auth.authToken;
       return fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        data: {text: task.text} 
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(addTaskSuccess(data, index)))
        .catch(err => {
            dispatch(tasksError(err));
        });
}

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const deleteTaskSuccess = (index, key) => ({
	type: DELETE_TASK_SUCCESS,
	index,
	key
})


export const deleteTask = (dispatch, getState, index, key) => {
	const authToken = getState().auth.authToken;
       return fetch(`${API_BASE_URL}/tasks/${key}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(deleteTaskSuccess(index, key)))
        .catch(err => {
            dispatch(tasksError(err));
        });
}




