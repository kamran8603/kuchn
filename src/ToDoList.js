import React from 'react'
import {FaTimes} from "react-icons/fa";

function ToDoList(props) {
 
  

  return  (
  <>
  
  <div className='todo_style'>
  <FaTimes className='FaTimes' aria-hidden="true" 
  onClick={() => {
    props.onSelect(props.id);
  }}
  />
 
  <li>{props.text}</li>
  </div>
  </> 
    
  );
};

export default ToDoList;