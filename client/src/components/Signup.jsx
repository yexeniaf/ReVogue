import {useState} from 'react';
import { signupUser } from '../services/users';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


  return (
    <div  className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <img
                    className="mx-auto h-40 w-auto"
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/279/heart-on-fire_2764-fe0f-200d-1f525.png"
                    alt="heart with flames"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
            </div>
            <form className="mt-8 space-y-6"  
                onSubmit={async (e) => {
                e.preventDefault()
                const user = {
                    username, 
                    email, 
                    password
                }
                const res = signupUser(user)
                props.setCurrentUser(res)

                navigate("/")
                }}
            >
                <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                type = "text"
                                value ={username}
                                placeholder="Username"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div>
                            <input
                                type = "text"
                                value ={email}
                                placeholder="Email"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <br/>
                        <div>
                            <input
                                type = "password"
                                placeholder="Password"
                                value ={password}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                        </div>
                    </div>
                    <br/>
                    <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> 
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
