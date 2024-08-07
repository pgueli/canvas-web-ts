// import Poster from '../components/Poster'
import MainNav from '../components/MainNav'
import BottomNav from '../components/BottomNav'
import { Outlet } from 'react-router-dom'
import React from 'react'

function Admin() {
  const [currentUser, setCurrentUser] = React.useState([/*array of post content*/])

  return (
    <div>
      <MainNav />
      <Outlet context={[currentUser]}/>
      <BottomNav />
    </div>
  )
}

export default Admin