import React from 'react'

export default function ToDoCard(props) {
   const {children, handleDeleteTodo, index,handleEditTodo} = props
  return (
    <div>
      <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
      <button onClick={() =>{
         handleEditTodo(index)
      }}>
      <i className="fa-solid fa-pen-to-square" />
      </button>
      <button onClick={() =>{
        handleDeleteTodo(index)
      }}>
      <i className="fa-solid fa-trash-can"/>
      </button>
      </div>
    
     </li>
    </div>
  )
}
