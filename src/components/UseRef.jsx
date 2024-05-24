import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const useref = useRef()
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count);
    //   setCount((counter)=> counter + 1)
},[count])
// console.log(useref);
    const test =()=>{
        console.log(useref);
        useref.current.classList.value = 'bg-danger text-white form-control'
    }
  return (
    <>
    {/* <h1 >{count}</h1> */}
    <input type="text" ref={useref}/>
    <button onClick={()=>test()}>Click</button>
    </>
  )
}

export default UseRef