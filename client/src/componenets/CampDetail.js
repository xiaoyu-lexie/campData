import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import Delete from './Delete'


const CampDetail = ({match}) => {
  // console.log('match', match)

  const [camp, setCamp] = useState({});

  useEffect(() => {
    const getCamp = async () => {
      const campFromAPI = await fetchSingle();
      // console.log('api data', campsFromAPI)
      setCamp(campFromAPI)
    }

    getCamp();
  }, [])

  //fetch single camps
  // 这种方法就可以
  const fetchSingle = async () => {
    const res = await fetch(`http://localhost:8000/camps/${match.params.id}`)
    const data = await res.json()
    return data
  }

  //这是怎么在<Link>传递props的方法：https://stackoverflow.com/questions/30115324/pass-props-in-link-react-router 138赞的回答
  const newTo = {
    pathname: `/campgrounds/${camp._id}/edit`,
    params1: camp
  }

  return (
    <h3>
      {camp.title}
      {/* 下面2个方法都可以导去/campgrounds/${match.params.id}/edit， 但选了<link>的原因是为了获取这个camp的id信息, 但后来发现Link不仅能传送id，还能传送整个camp的信息，就更好了 */}
      {/* <a href = {`/campgrounds/${match.params.id}/edit`}>Edit page</a> */}
      {/* Edit: */}
      <Link to={newTo}>Edit Page Click here</Link>


      <Delete deleteId = {camp._id}/>

      <a href='/campgrounds'>go back to all campgrounds</a>


    </h3>
  )
}

export default CampDetail;