import React from 'react'
import { useState } from 'react'
import { loginUser } from '../services/users';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  return (
    <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
            username,  
            password
        }
        const res = loginUser(user)
        props.setCurrentUser(res)

        navigate("/")
    }}>
        <input
            type = "text"
            value ={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type = "password"
            value ={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>

    </form>
  )
}
