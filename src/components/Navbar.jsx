import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
    <>
   <nav className='bg-light shadow p-3 '>
    <ul className='nav justify-content-around'>
     <li> <Link to={'/'} >Home</Link> </li> 
     <li> <Link to={'/fetch'}>Fetch</Link> </li>
      <li><Link to={'/signup'}>Sign Up</Link></li>
      <li><Link to={'/about'}>About</Link></li>
    </ul>
   </nav>
    </>
  )
}

export default Navbar 