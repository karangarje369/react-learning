import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DynamicTodo = () => {
    let [select,setSelect] = useState(0)
    function handleId(id){
        setSelect(id)
    }
  return (
    <>
    <button onClick={()=>handleId(1)}>1</button>
    <button onClick={()=>handleId(2)}>2</button>
    <button onClick={()=>handleId(3)}>3</button>
    <button onClick={()=>handleId(4)}>4</button>
    <Todo id={select}></Todo>
    
    </>
    )
}
function Todo({id}){
    if (!id) return;
    let [todo,setTodo] = useState(null)
    useEffect(function(){
        axios
        .get(`http://localhost:3000/todo?id=${id}`)
        .then(function(res){
            console.log(res.data);
            console.log(res.data.title);
            console.log(res.data.description);
           setTodo(res.data)
           
        })
    },[id])
    if (!todo) {
        return <h3>Loading...</h3>;
      }
      if (!id) return <h3>Select a todo</h3>;
  if (!todo) return <h3>Loading...</h3>;
    return(
        <>
        <div>
        <h1>Title:{todo.title}</h1>
        <h2>description:{todo.description}</h2>
        </div>
        </>
    )
    
}

export default DynamicTodo