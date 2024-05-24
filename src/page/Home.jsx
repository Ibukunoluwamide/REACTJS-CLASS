import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Event from "../components/Event";
import Navbar from "../components/Navbar";
import { decrement, increment } from "../redux/Counter";
import Contact from "./Contact";


const Home = () => {
  const count = useSelector((state)=>state.counterReducer.count);
  // console.log(count);
  const dispatch = useDispatch();
  return (
   <>
    {/* {
      user.map((item,id)=>(
           <div  key={id}>
            <h1 key={id}>{item.firstName}</h1>
           </div>
      ))
    } */}
    {/* <Event/> */}
    {/* <Contact/> */}
    {/* <h1>{count}</h1> */}
    <div>
      {/* <button className="bg-green p-2" onClick={()=>dispatch(increment())}>Increment</button> */}
      {/* <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
    </div>
  </>
  )
};

export default Home;
