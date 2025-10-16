import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import DynamicTodo from './DynamicTodo'
function App() {

  // let [counter,Setcounter] = useState(0)
  // let [todo,setTodo] = useState([])
  // useEffect(function(){
  //   setInterval(function(){
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(async(res)=>{
  //     const json = await res.json()
  //     console.log(json);
  //     setTodo(json)
  //   })
  //   },10000)
    
  // },[])
  // useEffect(()=>{
  //   alert("hi there")
  // },[counter])
  // function countUp(){
  //   Setcounter(counter++)
  // }

  let [todo,setTodo] = useState([])
  useEffect(function (){
    axios.get("http://localhost:3000/todo")
    .then( function(res){
       setTodo([...todo,res.data])
    })
  },[])
  return (
    <>
    <DynamicTodo></DynamicTodo>
    {todo.map(function(ele){
      return(<Todo key={ele.id} title={ele.title} description={ele.description}></Todo>)
    })}
    
  
    
    {/* <button onClick={countUp}>Update</button>

   <Todo todo={todo}>{todo}</Todo>
    <div>App</div> */}
    </>
  )
}

function Todo({title,description}){
  return (
    <>
     <div>title:{title}, description:{description}</div>
    </>
  )
}
export default App