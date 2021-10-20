import React from 'react';
import {useState} from 'react'

const CreateForm = () => {

  const [inputData, setInputData] = useState({
    title:"",
    location: ""
  })

  const handleChange = async (event) => {
    const {name, value} = event.target

    await setInputData({
      ...inputData,
      [name]:value
    })
    // console.log('inputdata', inputData, 'name', name, 'value', value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/camps', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputData)
    })
  }


  return (
    <div>
      <div>Create a new Camp here</div>
      <form onSubmit = {handleSubmit}>
        <p>
          <label htmlFor='title'>title: </label>
          <input type='text' id='title' name='title' onChange={handleChange}></input>
        </p>

        <p>
          <label htmlFor='location'>location: </label>
          <input type='text' id='location' name='location' onChange={handleChange}></input>
        </p>

        <button>
          Create a new camp
        </button>
      </form>
      <a href='/campgrounds'>go back to all campgrounds</a>

    </div>
  )
}

export default CreateForm