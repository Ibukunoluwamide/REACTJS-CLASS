
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Fetch from './components/Fetch'
import Props from './components/Props'
import UseEffect from './components/UseEffect'
// import Event from './components/Event'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Home from './page/Home'
import NotFound from './components/NotFound'
import About from './page/About'
import Formik from './components/Formik'
import Formikapi from './components/formik-api/Formikapi'
import UseRef from './components/UseRef'
import ClassComponent from './components/ClassComponent'
import FileUpload from './page/FileUpload'
import Test from './components/Test'

function App() {
  //  const handleEdit = ()=>{
  //   alert("Edit")
  //  }
  //  const handleDelete = ()=>{
  //   alert('Delete')
  //  }

  return (
    <>
  
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Navigate to="/"/>}></Route>
      <Route path='/fetch' element={<Fetch/>}></Route>
      <Route path='/class' element={<ClassComponent/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/formik' element={<Formik/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/about/:id' element={<About/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

     </Routes>
     {/* <Home/> */}
      {/* <Formikapi/> */}
     {/* <Event/> */}
     {/* <Signup/> */}
     {/* <Fetch/> */}
     {/* <UseEffect/> */}
     {/* <Props name="Olamide" title="Edit" handleEdit={handleEdit}/> */}
     {/* <Props name="Olamide" title="Delete" handleEdit={handleDelete}/> */}
     {/* <UseRef /> */}
    <FileUpload/>
    </>
  )
}

export default App
