// useCallback- `useCallback` is a hook in React , a popular Javascript library for building user interfaces. It is used to memoize functions , which can help in optimizing the performance of your application, especially in cases involving child components that rely on refrence equality to prevent unnecessary renders

/* lets consider if we declare 2 variables or functions :-
     
    a = 1 | b =1 (if we check a == b it will return true but the refrence of both variable is diffrent)
    lets take 2 functions i order to clear 
    function a(){return "hi"} | function b(){return "hi"} (here if we check a == b it will give false )
    So now we know that they are refrencially unequal 
    in react if we pass function to any component and then re-render happens the refrence  changes when rerender happens
    so to avoid that we can we hook useCallback

    🧠 In short:

✅ Without useCallback: function reference changes on every render.

✅ With useCallback: function reference stays the same (cached) until dependencies change.
*/
import React, { useCallback } from 'react'
import { useState } from 'react'
const Callback = () => {
    let [count,setCount] = useState(0)
    function handleCount(){
        setCount(count + 1)
    }
   let onclick = useCallback(function onclick(){
    console.log("hi there");
},[]) 
// function onclick(){
//     console.log("hi there");
// }
  return (
    <>
    <Demo onclick={onclick}></Demo>
    <button onClick={handleCount}>Counter:{count}</button>
    </>
  )
}
// Whenever aur web app renders the function onclick() keeps on changing refrence across all re-render so we are passing the function to the component Demo but nothing is dynamic happening wiht fucntion but still re-renders. so, in oreder to fix that we use callback so now if their is change in funciotn then only re-render will happen other wise memo will handle it and we see no rerender

let Demo = React.memo(({onclick})=>{
    console.log("inside demo");
    return (
        <button onClick={onclick}>click</button>
    )
}
)

export default Callback