import React from 'react';

export default function Checkbox(props) {
const tasks =  props.tasks.map((task) => {
          return (<li>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">{task}</label>
          <i className="fas fa-times"></i>
        </li>)
      }
      );


	return(
      <ul className="checkbox">
       {tasks}
      </ul>
      )
}