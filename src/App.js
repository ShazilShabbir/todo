import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
function App() {

  const [items, setItems] = useState([]);

  

  function addItem(inputText) {
   if (inputText.trim() !== "") {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
   }
   
  }

  function deleteItem(id){
    setItems((prevItem)=>{
      return prevItem.filter(
        (items,index)=>{
          return index !== id
        }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputArea
      onAdd={addItem}
      />
      <div>
        <ul>
          {items.length > 0 ? (items.map((todoItem, index)=> {
         return   <ToDoItem
            key={index}
            id={index}
            onChecked={deleteItem}
            text={todoItem} />
          })):(null) }
        </ul>
      </div>
    </div>
  );
}

export default App;
