import React from 'react'

function Cards() {
  return (
    <>
    <CardWrapper innerComponent = {<InnerContent/>}></CardWrapper>
    <CardWrapper>
        <InnerContent></InnerContent>
    </CardWrapper>

    </>
    )
}

function InnerContent(){
    return (
        <div>
            hi there
        </div>
    )
}
function CardWrapper({children}){{/* this gives access to the all content inside the component  */}
    return (
        <div style = {{border:"2px solid black"}}>
            {/* {innerComponent} */}
            {children}  {/* this gives access to the all content inside the component  */}
        </div>
    )
    
}

export default Cards