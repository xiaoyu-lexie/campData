import React from 'react';
import {useState} from 'react'

const Edit = ({match, location}) => {
  const id = match.params.id;
  const camp = location.params1;
  const prevLocation = camp.location
  const prevTitle = camp.title

  const [updateData, setUpdateData] = useState({
    title: prevTitle,
    location: prevLocation
  })

  const handleChange = async (event) => {
    const {name,value} = event.target

    await setUpdateData({
      ...updateData,
      [name]: value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/camps/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })

    // console.log('JSON.stringify(updateData)', JSON.stringify(updateData))
  }

  return (
    <div>
      <div>Update Camp here</div>

      <form onSubmit = {handleSubmit}>
        <p>
          <label htmlFor='title'>title: </label>
          <input type='text' id='title' name='title' placeholder={prevTitle} onChange={handleChange}></input>
        </p>

        <p>
          <label htmlFor='location'>location: </label>
          <input type='text' id='location' name='location' placeholder={prevLocation} onChange={handleChange}></input>
        </p>

        <button>
          Update camp
        </button>
      </form>

      <a href='/campgrounds'>go back to all campgrounds</a>

    </div>
  )
}

export default Edit