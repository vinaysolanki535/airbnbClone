import React from 'react'
import './Home.css'
import Banner from './Component/Banner'
import Card from './Component/Card'

function Home() {
  return (
    <div className='home'>
      <Banner />

      <div className='home_section'>
        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618747006014?alt=media&token=00c53808-6210-4481-83d0-73de2092c2c2'
          title=' Great location, stunning view and warm welcoming'
          description='1 swimming pool - Free WiFi - Family rooms - Non-smoking rooms'
        />

        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618747860278?alt=media&token=9726d85a-f777-402c-abf5-f8a30c69dd86'
          title='St Katherines Way Tower Hamlets London E1W  United Kingdom'
          description=' Free WiFi - Parking - Non-smoking rooms - Fitness center - Restaurant Facilities for disabled guests'
        />

        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618748069316?alt=media&token=a4cd755b-86e9-416a-8fbc-35d363fdd43c'
          title='20 Upper Ground, Southwark, London, SE1 9PD, United Kingdom'
          description='Comfortavle private place, with room for family or friends'
        />
        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618748209165?alt=media&token=98fac84a-e8ac-43fa-b409-25eaaa0ee28e'
          title='4-18 Harrington Gardens, Kensington and Chelsea, London'
          description='Free WiFi - Parking - Family rooms - Non-smoking rooms - Fitness center - Restaurant'
        />
      </div>

      <div className='home_section'>
        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618747968134?alt=media&token=1ec49696-cd43-428f-9320-05faa1731ead'
          title='22-25 Finsbury Square, City , Islington,'
          description='1 swimming pool - Free WiFi - Family rooms - Spa - Non-smoking rooms - Bar'
        />

        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618747736953?alt=media&token=d4588564-71e4-43ec-bbb4-84d949796068'
          title='Strand, Westminster Borough, London, WC2R 0EU'
          description='1 swimming pool - Free WiFi - Parking - Family rooms - Spa -  Airport shuttle'
        />

        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2F1618747585822?alt=media&token=4e53cbd8-ca45-42bb-8620-10ce0786183a'
          title='49 Queensborough Terrace, Westminster Borough, London, W2 3SY, United Kingdom '
          description=' Facilities for disabled guests - Room service - 24-hour front desk - Bar'
        />

        <Card
          src='https://firebasestorage.googleapis.com/v0/b/airbnb-colne.appspot.com/o/Y7YemjeBV3PmMTDH3Jig4UhBTM13%2Fimages%2Froom-2269594_640.jpg?alt=media&token=ef41fd53-518a-42d1-bcf4-97092d8f9316'
          title='Entire Home'
          description='Comfortavle private place, with room for family or friends'
        />
      </div>
    </div>
  )
}

export default Home
