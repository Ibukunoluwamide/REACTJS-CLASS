import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const Formik = () => {
 const formik = useFormik({
  initialValues: { 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
   },
   validationSchema: Yup.object({
    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('First name is required'),
    lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .min(6, 'Must be more than 6 characters')

   }),
   onSubmit: (values)=>{
    console.log(values)
   },
 })
 console.log(formik.errors);
//  console.log(formik.values.firstName);
const labelStyle = {
    fontSize: "1.2rem", 
    fontWeight: "bold", 
    marginBottom: "10px"
  };
  return (
    <>
       <form className="col-lg-4 m-auto shadow-lg p-3 bg-white" onSubmit={formik.handleSubmit}>
          <h2 className="text-center">SIGN UP</h2>
          <div className="mb-3">
            <label htmlFor="firstname" style={labelStyle}>
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            <small className='text-danger'>{formik.errors.firstName}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" style={labelStyle}>
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              
              />
              <small className='text-danger'>{formik.errors.lastName}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="email" style={labelStyle}>
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              
              />
              <small className='text-danger'>{formik.errors.email}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              />
              <small className='text-danger'>{formik.errors.password}</small>
          </div>
          <button type="" className="btn btn-success col-12" >
            Submit
          </button>
        </form>
    </>
  )
}

export default Formik