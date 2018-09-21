import React from 'react';
import Day from './day';

function isToday(date) {
    const today = new Date(new Date().setHours(0,0,0,0));
    const doesDayMatch = today.getDate() === date.getDate();
    const doesMonthMatch = today.getMonth() === date.getMonth();
    const doesYearMatch = today.getFullYear() === date.getFullYear();
    return (doesDayMatch && doesYearMatch && doesMonthMatch)
} 

function format(timestamp) {
    const options = {month: 'long', day: 'numeric' };
    const date = new Date(new Date(parseInt(timestamp)).setHours(0,0,0,0));
    const dateString = date.toLocaleDateString("en-US", options);
    return `${isToday(date) ? "Today, " : ''}${dateString}`

}



export default function Planner(props) {

		
const dates = Object.keys(props.tasks)
let days=[];
        for (let i = 0; i < 7; i++) {
            console.log(typeof dates[i])
        days.push(
        <li>
            <h4 className="date">{format(dates[i])}</h4>
            <Day tasks={props.tasks[dates[i]]}/>
        </li>
        );
        }
        
		return (
        <div className="entries">
             <ul className="new-task">
             {days}
            </ul>
        </div>
        );
}



//const date = new Date();
//const todayDate = (new Date()).toLocaleDateString("en-US", options);
//const dates =[];

//for (let i=0; i< 7; i++) {
//console.log(date);
//date.setDate(date.getDate()+1);
//dates.push(date)};