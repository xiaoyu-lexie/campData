import React from 'react';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Camps from './components/Camps'
import CampDetail from './components/CampDetail'
import CreateForm from './components/CreateForm'
import Edit from './components/Edit'

const App = () => {

  const [camps, setCamps] = useState([]);

  useEffect(() => {
    const getCamps = async () => {
      const campsFromAPI = await fetchAll();
      // console.log('api data', campsFromAPI)
      setCamps(campsFromAPI)
    }

    getCamps();
  }, [])

  //fetch all camps
  // 这种方法就可以
  const fetchAll = async () => {
    const res = await fetch('http://localhost:8000/camps')
    const data = await res.json()
    return data
  }

  // // 但这种就不可以，为什么呢？
  // const fetchAll = () => {
  //   fetch('http://localhost:8000/camps')
  //   .then(res => res.json())
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  // 下面是第3种方法，但是不用useEffect，也能返回api的数据，但是会打印无数个camps（下面的console.log('camps',camps)会被无数次执行，为什么？
  // const fetchAll = async () => {
  //   fetch('http://localhost:8000/camps')
  //   .then(res => {
  //     console.log('hahahah')
  //     return res.json()
  //   })
  //   .then(data => setCamps(data))
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
  // fetchAll();
  // console.log('camps in APP', camps)

  return (
    <Router>
      <div >
        <Switch>
          <Route path="/campgrounds" exact render={() => <Camps camps={camps} />}   />
          {/* 下面两行的顺序很重要，new必须要放在:id前面才能显示new page */}
          <Route path = "/campgrounds/:id/edit" component = {Edit} />
          <Route path = "/campgrounds/new"  component = {CreateForm} />
          <Route path = "/campgrounds/:id" exact component = {CampDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
