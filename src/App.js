import './App.css'
import Home from './Home'
import Header from './Component/Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import { Link } from 'react-router-dom'
import Login from './Login'
import { auth } from './Firebase'
import { useEffect, useState } from 'react'
import Signup from './Signup'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The User Is >>>', authUser)

      if (authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/search'>
            <Header />
            <SearchPage />
            <Footer />
          </Route>
          <Route path='/home'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
