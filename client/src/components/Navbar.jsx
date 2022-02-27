import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to="/"><h1>ReVogue</h1></Link>
      <Link to='/items'>Items</Link>
      {props.currentUser ?
        <>
          <h3>Welcome, {props.currentUser.username}!</h3>
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