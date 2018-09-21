import React from 'react';

export default function Date() {
	const date = new Date();
const dates =[];
var options = {month: 'long', day: 'numeric' };
for (let i=1; i<=7; i++) {
console.log(date);
date.setDate(date.getDate()+1);
dates.push(<h4>{date.toLocaleDateString("en-US", options)}</h4>)
    };
    return(
    <div>{dates}</div>
    )
}