import {useState} from 'react';
import { signupUser } from '../services/users';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


  return (
    <form onSubmit={async (e) => {
        e.preventDefault()
        const user = {
            username, 
            email, 
            password
        }
        const res = signupUser(user)
        props.setCurrentUser(res)

        navigate("/")
    }}>
        <input
            type = "text"
            value ={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type = "text"
            value ={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type = "password"
            value ={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button> Sign Up</button>

    </form>
  )
}
