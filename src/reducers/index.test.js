import  indexReducer  from './index';
import {addTask, deleteTask} from '../actions/index';

describe('indexReducer', () => {
	//Set up some dummy data
	const task1= {
		id: 68390263,
		date: 8376337871,
		text: 'Hello1',
		username: 'sheiko@gmail.com'
	};

	 it('Should set the initial state when nothing is passed in', () => {
        const state = indexReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            tasks: {},
					 quotes : ["“Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.” —Paul J. Meyer",
"“The way to get started is to quit talking and begin doing“. – Walt Disney",
"“Sometimes, things may not go your way, but the effort should be there every single night“. – Michael Jordan",
"“Until we can manage time, we can manage nothing else.” - Peter Drucker",
],
 error: null

        });
    });

	it('should return the current state on an unknown action', () => {
    let currentState = {}
    const state = indexReducer(currentState, {type: '__UNKNOWN'})
    expect(state).toBe(currentState)
  })

	describe('addTask', () => {
		it('Should add new tasks', () => {
			let state;
			state = indexReducer(state, addTask('Hello2', 0, 2765454));
			expect(state).toEqual({
				tasks: {},
				quotes : ["“Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.” —Paul J. Meyer",
"“The way to get started is to quit talking and begin doing“. – Walt Disney",
"“Sometimes, things may not go your way, but the effort should be there every single night“. – Michael Jordan",
"“Until we can manage time, we can manage nothing else.” - Peter Drucker",
],
 error: null

			})
		})
	})


})