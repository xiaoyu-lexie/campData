import React from 'react'
import {Link} from 'react-router-dom'

const Camps = ({camps}) => {
  // console.log('props in camps', camps)

  const campsComponent = camps.map(camp => {
    return (
      <li key = {camp._id}>
        <Link to={`/campgrounds/${camp._id}`}>{camp.title}</Link>
      </li>
    )
  })

  return (
    <div >
      <h2>
        <a href='/campgrounds/new'>create a new</a>
      </h2>
      {campsComponent}
    </div>
  )
}

export default Camps;