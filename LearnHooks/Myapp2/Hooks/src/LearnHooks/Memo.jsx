// useMemo
// Better SOlutuion - memorize the value across re-render , only recalculate it if inputval changes 
// so the problem with this was if counter gets change then everything gets re-render so to avoid that we used useMemoso now if we update the counter with the use of useMemo we prevented the re-render of other states 
// what if we have used useEffect on inputvalue so then extra state we need and also extra re-render will happen when we try to update the inputvalue 
// useMemo lets you cache(not exactly but similar) the state 
import React from 'react'
import { useMemo , useState } from 'react'

const Memo = () => {
  let [count, setCount] = useState(0) 
  const [value,setValue] = useState(0)
  // let [sum,setSum] = useState(0)
  function handleCount(){
    setCount(count+1)
  }
  let sumnum = useMemo(()=>{
    let finalCount = 0
    for(let i = 1 ; i<=value ; i++){
      finalCount +=  i
    }
    return finalCount
  },[value])
  
  // setSum(sumnum)
  return (
    <>
    <input type="text" onChange={(ele)=>{
        setValue(ele.target.value)
      }}/> 
       <div>Sum:{sumnum}</div>
      <button onClick={handleCount} >Counter:{count}</button>
      
    </>
  )
}

export default Memo