import React from 'react';
import {useState} from 'react'


const Delete = ({deleteId}) => {

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8000/camps/${deleteId}`, {
      method: 'Delete'
    })
  }

  return (
    <form onSubmit = {handleDelete}>
      <button>Delete Camp</button>
    </form>
  )
}

export default Delete;