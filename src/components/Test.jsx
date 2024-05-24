import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    country: '',
    languageToLearn: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://speak-africa-api.herokuapp.com/api/v1/waitlist', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.log('Error:', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" />
      <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
      <input type="text" name="languageToLearn" value={formData.languageToLearn} onChange={handleChange} placeholder="Language To Learn" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Test;
