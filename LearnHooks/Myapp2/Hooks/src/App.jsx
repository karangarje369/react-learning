import { useState } from 'react'
import Callback from './LearnHooks/Callback'
import Memo from './LearnHooks/Memo'
function App() {
  return (
    <>
   <Memo></Memo>
   <br />
   <br />
   <h1>UseCallback:</h1>
   <Callback></Callback>
    </>
  )
}

export default App
