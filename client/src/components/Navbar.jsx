import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to='/item'>Items</Link>
      {props.currentUser ?
        <>
          <h3>Welcome, {props.currentUser.user}!</h3>
          <button onClick={props.logout}>Log Out</button>
        </>
        :
        <>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </>
      }
      
    </div>
  )
}