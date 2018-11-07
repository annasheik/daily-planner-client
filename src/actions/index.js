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
export const addTaskSuccess = (task, index, date) => ({
	type: ADD_TASK_SUCCESS,
	task,
	index, 
    date
})

export const addTask = (task, index, date) => (dispatch, getState) => {
       const x = JSON.stringify({text: task, date: date});
	   const authToken = getState().auth.authToken;
       return fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: task, date: date}) 
    })
        .then(res => {
            return normalizeResponseErrors(res)})
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(data => {
            console.log(data);
            console.log(index)
            const task = {};
            task[date]=[data];
            dispatch(addTaskSuccess(task, index, date))})
        .catch(err => {
            console.error(err)
            dispatch(tasksError(err));
        });
}

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const deleteTaskSuccess = (id, date) => ({
	type: DELETE_TASK_SUCCESS,
	id,
    date
})


export const deleteTask = (id, date) => (dispatch, getState) => {
    console.log(date)
	const authToken = getState().auth.authToken;
       return fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            if(!res.ok) {
                return normalizeResponseErrors(res);
            }
        return dispatch(deleteTaskSuccess(id, date))
         })
        .catch(err => {
            dispatch(tasksError(err));
        });
}




