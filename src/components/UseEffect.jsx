import React, { useEffect } from 'react'

const UseEffect = () => {
    useEffect(() => {
      console.log("Useffect");
    
    }, [])
    
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect