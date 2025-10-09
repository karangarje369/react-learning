import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [title,setTitle] = useState("Karan")
  function handleChange(){
    let random = Math.random() * 100
    setTitle(random)
  }
  const [todo,setTodo] = useState([
    {
      title:"Go to Gym",
      description:"From 7 - 8",
      completed:true
    },
    {
      title:"Do DSA",
      description:"From 1 - 4",
      completed:false
    },
    {
      title:"Sudy dev",
      description:"From 8 - 9",
      completed:true
    }
  ])
  function addTodo(){
    setTodo([...todo,{
      title:"new todo",
      description:"new des"
    }])
  }

  
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <Todo todo={todo}></Todo>

      <div>
        <button onClick={handleChange}>Change title</button>
        <Header title = {title}></Header>
        <Header title = "game:bgmi"></Header>
      </div>
    </>
  )
}


function Todo(props){
  return(
  props.todo.map((ele)=>{
    return(
      <>
     <div> Title: {ele.title} </div>
     <div> Description: {ele.description} </div>
     </>
    )
  })
  )
}
function CustomButton(props){
  function onclickHandler(){
    props.setCount(props.count + 1)
  }
  return (
    <button onClick={onclickHandler}>Counter:{props.count}</button>
  )

}

function Header({title}){
  return(
    <div>name:{title}</div>
  )
}
export default App