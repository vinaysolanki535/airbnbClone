import React, { useState } from 'react'
import './Banner.css'
import Button from '@material-ui/core/Button'
import Search from './Search'
import { Link, useHistory } from 'react-router-dom'

function Banner() {
  const history = useHistory()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}
        <Button
          className='banner_searchButton'
          variant='outlined'
          onClick={() => {
            setShowSearch(!showSearch)
          }}
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and Stretch your imagination</h1>

        <h5>
          plane a different kind of getway to uncover the hidden gems near you
        </h5>

        <Button
          onClick={() => {
            history.push('/search')
          }}
          variant='outlined'
        >
          Explore Nearby
        </Button>
      </div>
    </div>
  )
}

export default Banner
