import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate()
    const signup =()=>{
        alert('To Sign Up')
        navigate('/signup')
    }
  return (
    <>
    <button className='btn btn-danger' onClick={signup}>SIGN UP</button>
    </>
    
  )
}

export default Contact