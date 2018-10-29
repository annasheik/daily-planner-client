import React from 'react';
import Day from './day';
import {connect} from 'react-redux';

function isToday(date) {
    const today = new Date(new Date().setHours(0,0,0,0));
    const doesDayMatch = today.getDate() === date.getDate();
    const doesMonthMatch = today.getMonth() === date.getMonth();
    const doesYearMatch = today.getFullYear() === date.getFullYear();
    return (doesDayMatch && doesYearMatch && doesMonthMatch)
} 

function format(timestamp) {
    console.log(timestamp)
    const options = {month: 'long', day: 'numeric' };
    const date = new Date(new Date(parseInt(timestamp)).setHours(0,0,0,0));
    const dateString = date.toLocaleDateString("en-US", options);
    return `${isToday(date) ? "Today, " : ''}${dateString}`
}

function fakeTasks() {
    const date = new Date(new Date().setHours(0,0,0,0));
    const tasks = {};

    for (let i=0; i<7; i++) {
    const newDate = new Date(new Date().setHours(0,0,0,0));
    newDate.setDate(date.getDate()+i);
    tasks[newDate.getTime()] = [];
    }
    console.log(tasks)
    return tasks;
}

function mergeTasks(tasks) {
    const merged = fakeTasks();
    const dates = Object.keys(tasks)
    dates.forEach(date => {
        const timestamp = new Date(parseInt(date)).setHours(0,0,0,0).getTime();
        merged[timestamp] = tasks[date]; 
    })

   // const timestamps = Object.keys(dates.map(date => {
   //     return new Date(parseInt(date)).setHours(0,0,0,0).getTime();
   // }));
   // timestamps.forEach((timestamp) => {
    //    merged[timestamp] = dates[i];
   // })


    return merged;
}


export class Planner extends React.Component{

    render() {    
        const mergedTasks = mergeTasks(this.props.tasks);
        const dates = Object.keys(mergedTasks)
        console.log(dates)
        let days=[];
        for (let i = 0; i < 7; i++) {
        days.push(
        <li key={i}>
            <h4 className="date">{format(dates[i])}</h4>
            <Day index={i} tasks={this.props.tasks[dates[i]]}/>
        </li>
        );
        }
		return (
        <div className="entries">
             <ul className="new-task">
             {days}
            </ul>
        </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
   return {
    tasks: state.index.tasks,
    quotes: state.index.quotes
}
}
export default connect(mapStateToProps)(Planner)




//const todayDate = (new Date()).toLocaleDateString("en-US", options);
//const dates =[];

//for (let i=0; i< 7; i++) {
//console.log(date);
//date.setDate(date.getDate()+1);
//dates.push(date)};