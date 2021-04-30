import React, { useEffect, useState } from 'react'
import './SearchPage.css'
import Button from '@material-ui/core/Button'
import SearchResult from './Component/SearchResult'
import { db, storageRef } from './Firebase'
import { useStateValue } from './StateProvider'

function SearchPage() {
  const [{ user }, dispatch] = useStateValue()
  const [snapShot, setSnapShot] = useState([])

  useEffect(() => {
    getAllTasks()
  }, [user])

  const getAllTasks = async () => {
    await db.collection('HomeCard').onSnapshot((querySnapshot) => {
      setSnapShot(querySnapshot.docs)
    })
  }

  return (
    <div>
      <div className='searchPage_info'>
        <p>62 states - 26 august to 30 august - 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant='outlined'>Cancellation Flexibility</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and beds</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      {snapShot.map((val) => {
        return (
          val != null && (
            <SearchResult
              img={val.data().src}
              location={val.data().location}
              title={val.data().title}
              description={val.data().description}
              star={val.data().star}
              price={val.data().price}
              total={val.data().total}
            />
          )
        )
      })}
    </div>
  )
}

export default SearchPage
