import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [input, setInputs] = useState({
    title: '',
    description: '',
    price: null,
    cover: '',
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick =  async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', input);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  console.log(input);

  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange} name='description' />
      <input type="number" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add