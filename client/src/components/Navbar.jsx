import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        {props.currentUser ?
            <>
                <h3>Welcome back, {props.currentUser.username}!</h3>
                <button>Log Out</button>
            </>
            :
            <>
                <Link to= '/login'>Login</Link>
                <Link to= '/signup'>Sign Up</Link>
            </>
        }
    </div>
  )
}
