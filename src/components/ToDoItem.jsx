import React  from 'react'

function ToDoItem(props) {
  

  return <div style={{cursor: "pointer"}} onClick={()=>{
    props.onChecked(props.id)
  }}> 
    <li>{props.text}</li>
  
  </div>
}

export default ToDoItem