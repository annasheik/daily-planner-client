import {TASKS_ERROR, tasksError,
        FETCH_TASKS_SUCCESS, fetchTasksSuccess,
        fetchTasks, ADD_TASK_SUCCESS, addTaskSuccess,
        addTask, DELETE_TASK_SUCCESS, deleteTask,
        deleteTaskSuccess}
        from './index';

describe('tasksError', () => {
	it('should return the action', () => {
		const error="Error";
		const action = tasksError(error);
		expect(action.type).toEqual(TASKS_ERROR);
        expect(action.error).toEqual(error);
	});
});

describe('fetchTasksSuccess', () => {
	it('should return the action', () => {
		const tasks=[];
		const action = fetchTasksSuccess(tasks);
		expect(action.type).toEqual(FETCH_TASKS_SUCCESS);
        expect(action.tasks).toEqual(tasks);
	});
});

describe('addTaskSuccess', () => {
	it('should return the action', () => {
		const task='Hey';
		const date=34567654;
		const index=1;
		const action = addTaskSuccess(task, index, date);
		expect(action.type).toEqual(ADD_TASK_SUCCESS);
        expect(action.task).toEqual(task);
        expect(action.date).toEqual(date);
        expect(action.index).toEqual(index);
	});
});

describe('deleteTaskSuccess', () => {
	it('should return the action', () => {
		const id='lkjhdfjkr';
		const date=34567654;
		const action = deleteTaskSuccess(id, date);
		expect(action.type).toEqual(DELETE_TASK_SUCCESS);
        expect(action.id).toEqual(id);
        expect(action.date).toEqual(date);
	});
});

