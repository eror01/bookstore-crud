import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [input, setInputs] = useState({
    title: '',
    description: '',
    price: null,
    cover: '',
  })

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split('/')[2];

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick =  async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/books/${bookId}`, input);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  console.log(input);

  return (
    <div className='form'>
      <h1>Update Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange} name='description' />
      <input type="number" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update