import { useState, memo } from 'react'
import Todo from './Todo'
import Cards from './Cards'
function App() {
  const [count, setCount] = useState(0)
  const [todo,setTodo] = useState([
    {
      id:1,
      title:"Go to Gym",
      description:"5-6"
    },
    {
      id:2,
      title:"Do homework",
      description:"7-8"
    },
    {
      id:3,
      title:"make food",
      description:"9-10"
    }
  ])
  let [title,setTitle] = useState("Any")
  function handle(){
    setTitle(Math.round(Math.random()*100))
  }
  function handleTodo(){
    setTodo([...todo,{
      title:"new todo",
      description:"new description"
    }])
  }
  return (
    <>
    <Cards></Cards>
    <button onClick={handleTodo}>Add todo</button>
    <Todo todo = {todo} setTitle = {setTitle} key={todo.id}></Todo>
     {/* <HeaderWithButton></HeaderWithButton>
     <Header title="Karan"></Header>
     <Header title="Karan"></Header>
     <Header title="Karan"></Header>
     <Header title="Karan"></Header> */}

    <button onClick={handle}>Click</button>
    <Header title = {title}></Header>
    <Header title = "Hello "></Header>
    <Header title = "Hello "></Header>
    <Header title = "Hello "></Header>
    <Header title = "Hello "></Header>
    </>
  )
}
// function Header({title}){
//  return(
//   <div>name:{title}</div>
//  )
// }
// function HeaderWithButton(){
//   let [title,setTitle] = useState("Any")
//   function handle(){
//     setTitle(Math.round(Math.random()*100))
//   }
//   return(
//     <div>
//       <button onClick={handle}>Click</button>
//       <Header title ={title}></Header>
//     </div>
//   )
// }
memo
// Another way of doing this with useMemo 
const Header = memo(function Header({title}){
   return(
    <div>name:{title}</div>
   )
  })
export default App
