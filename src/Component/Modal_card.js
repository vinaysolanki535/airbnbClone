import React from 'react'
import './Modal_card.css'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useRef, useState } from 'react'
import { db, storageRef } from '../Firebase'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import ImageIcon from '@material-ui/icons/Image'

function Modal_card({ close }) {
  const [{ user }, dispatch] = useStateValue()
  const imageRef = useRef()
  const [img, setImg] = useState(null)
  const openImageSelector = (e) => {
    imageRef.current.click()
  }
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [hotelName, setHotelName] = useState('')

  const uploadImages = async (e) => {
    if (user) {
      const currentDate = Date.now()
      let uploadTask = storageRef
        .child(user.uid)
        .child('images')
        .child(Date.now().toString())
      await uploadTask.put(img).then((snapshot) => {
        uploadTask.getDownloadURL().then((url) => {
          db.collection('Users')
            .doc(user.uid)
            .collection('HomeCard')
            .doc()
            .set({
              description: description,
              location: location,
              src: url,
              price: price,
              title: title,
              total: (parseInt(price) + 27).toString(),
              star: (Math.floor(Math.random()) * 5 + 1).toString(),
            })

          db.collection('HomeCard')
            .doc()
            .set({
              description: description,
              location: location,
              src: url,
              price: price,
              title: title,
              total: (parseInt(price) + 27).toString(),
              star: (Math.floor(Math.random()) * 5 + 1).toString(),
            })
        })
      })
    }
    close()
    console.log('images uploaded')
  }
  const getImage = (event) => {
    if (event.target.files) {
      setImg(event.target.files[0])
    } //getting images from device
  }
  return (
    <div className='modal_card'>
      <label>Hotel Name</label>
      <input
        onChange={(e) => setHotelName(e.target.value)}
        type='text'
        placeholder='name of hotel or place'
      ></input>

      <label>Location</label>
      <input
        onChange={(e) => setLocation(e.target.value)}
        type='text'
        placeholder='type location'
      ></input>

      <label>Title</label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='give title'
      ></input>

      <label>Description</label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type='text'
        placeholder='type description about place'
      ></input>
      <label>Price</label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type='text'
        placeholder='type price per room '
      ></input>
      <Button
        variant='outlined'
        color='primary'
        component='span'
        onClick={openImageSelector}
      >
        <input
          accept='image/*'
          hidden
          ref={imageRef}
          id='fileUpload'
          multiple
          type='file'
          onChange={getImage}
        />
        <ImageIcon />
        Upload Image
      </Button>

      {img && <img src={URL.createObjectURL(img)} />}
      <Button onClick={uploadImages} variant='outlined'>
        Submit
      </Button>
    </div>
  )
}

export default Modal_card
