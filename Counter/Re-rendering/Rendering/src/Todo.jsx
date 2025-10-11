import React from 'react'

function Todo(props) {
 
  return (
    props.todo.map(function(ele){
      return (
        <div key={ele.id}>
          <div>title:{ele.title}</div>
          <div>description:{ele.description}</div>
        </div>
      )
    })
  )
}

export default Todo