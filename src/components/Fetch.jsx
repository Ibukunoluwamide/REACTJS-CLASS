import axios from 'axios'
import React, { useState } from 'react'
const Fetch = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const fetchData = ()=>{
        // let endPoint = 'https://api.publicapis.org/entries'
        // let endPoint2 = `https://api.agify.io?name=${name}` 
        // fetch(endPoint)
        // .then(response => response.json())
        // .then(json => setData(json))
        // console.log(data);
        // axios.get(endPoint2).then((result) => {
        //    console.log(result); 
        // //    setData(result.data)
        // })

    }
    const fetchUsers = ()=>{
        let endPoint = 'https://api.github.com/users'
        axios.get(endPoint).then((result) => {
           console.log(result); 
           setData(result.data)
        })

    }
  return (
    <>
    {/* <div className="">
       <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} />
      <button onClick={fetchData} className="btn btn-primary">Fetch</button>
    </div> */}
      {/* {
        data.map((item,index)=>(
            <div className='flex items-center justify-between'>
                <h1>{item.name}</h1>
                <h1>{item.phone}</h1>
 
            </div>
        ))
      } */}

      <button onClick={fetchUsers} className="btn btn-danger">Fetch GitHub Users</button>
    <div className="">
    <div className="row">

{
 data.map((item,id)=>(
     <div key={id} className="col-lg-3 shadow">
         <img src={item.avatar_url} alt="" width='50px' className='rounded-5'/>
         <p className='fw-bold'>{item.login}</p>
         <p>ID: {id+1}</p>
         <p>{item.url}</p>
     </div>
 ))
}

</div>
    </div>
    </>
  )
}

export default Fetch