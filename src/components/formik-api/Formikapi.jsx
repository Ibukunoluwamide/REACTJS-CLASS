import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'

const Formikapi = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
        },
        onSubmit: (values) => {
          axios.get(`https://api.agify.io?name=${values.name}`)
            .then((response) => {
              const { name, age } = response.data;
              alert(`Name: ${name}, Possible Age: ${age}`);
            })
            .catch((error) => {
              console.log(error);
            });
        },
      });
    
      return (
        <div>
          <h1>Age Predictor</h1>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Enter a name: </label>
              <input
                type="text"
                id="name"
                name="name"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div>
              <button type="submit" className='btn btn-info'>Predict Age</button>
            </div>
          </form>
        </div>
      );
    
}

export default Formikapi