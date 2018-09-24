import {ADD_TASK, DELETE_TASK} from '../actions';

const initialState = {tasks: {},
					 quotes : ["“Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.” —Paul J. Meyer",
"“The way to get started is to quit talking and begin doing“. – Walt Disney",
"“Sometimes, things may not go your way, but the effort should be there every single night“. – Michael Jordan",
"“Until we can manage time, we can manage nothing else.” - Peter Drucker",
]
}

const date = new Date(new Date().setHours(0,0,0,0));
const dates =[];

for (let i=0; i<7; i++) {
	const newDate = new Date(new Date().setHours(0,0,0,0));
newDate.setDate(date.getDate()+i);
dates.push(newDate)

    };
    console.log(dates)

const tasks = [["Finish React Project",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Meal Prep",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Yoga",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Finish React Project",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Finish React Project",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Finish React Project",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"],
            ["Finish React Project",
            "Doctor Appointment at 2:30",
            "Pay electricity bill"]]
            ;

for (let i=0;i<=dates.length-1; i++) {
	initialState.tasks[dates[i].getTime()] = tasks[i];
	}

export const Reducer = (state=initialState, action) => {
    console.log(action.task)
	if(action.type ===ADD_TASK) {
	  // const newTasks = state.tasks[dates[action.index].getTime()].concat(action.task);
	   const a = state.tasks[dates[action.index].getTime()];
	   a.push(action.task); 
	   console.log(a) 
	   console.log(state)
       
	   const newState = Object.assign({}, state, {
	   	tasks: {...state.tasks}
	   	})
	   console.log(newState)
	   return newState;
	   
	   
	}
	else if(action.type===DELETE_TASK) {
		console.log(action.index)
		console.log(action.key)
		const tasks = state.tasks[dates[action.index].getTime()].splice(action.key, 1)
		const b = Object.assign({}, state, {
			tasks: {...state.tasks}
		});
		console.log(b)
		return b;
		
	}

	console.log(state)
	return state;
}






