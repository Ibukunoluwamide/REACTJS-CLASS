import React, { useState } from 'react'

const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [user, setUser] = useState([])
    const submitBtn = ()=>{
         console.log(firstname);
         let allUser = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
         }
         setUser(allUser)
         console.log(user);
    }
  return (
    <>
    <div className="col-lg">
    <input type="text" placeholder='First name' className='border my-2' onChange={(e)=>setfirstname(e.target.value)}/><br />
      <input type="text" placeholder='Last name' className='border my-2'onChange={(e)=>setlastname(e.target.value)}/><br />
      <input type="text" placeholder='Email' className='border my-2' onChange={(e)=>setemail(e.target.value)}/><br />
      <input type="text" placeholder='Password' className='border my-2' onChange={(e)=>setpassword(e.target.value)}/><br />
      <button type='submit' className='bg-green p-2' onClick={submitBtn}>Submit</button>
    </div>
    <table>
        <tr>
            <th>F Name</th>
            <th>L Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        {
        <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
        </tr>

           
        }
    </table>
    </>
  )
}

export default Signup