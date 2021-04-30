import React from 'react'
import './SearchResult.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarIcon from '@material-ui/icons/Star'
import Button from '@material-ui/core/Button'

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteIcon className='searchResult_heart' />
      <div className='searchResult_info'>
        <div className='searchResult_infoTop'>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_______</p>
          <p>{description}</p>
        </div>
        <div className='serachResult_infoBottom'>
          <div className='searchResult_stars'>
            <StarIcon className='searchResult_star' />
            <p>{star}</p>
          </div>
          <div className='searchResult_price'>
            <h2>${price} / night</h2>
            <p>${total} / night</p>
          </div>
        </div>
        <Button variant='outlined'>Book Now</Button>
      </div>
    </div>
  )
}

export default SearchResult
