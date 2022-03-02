import React from 'react'
import { useState } from 'react';
import { loginUser } from '../services/users';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  
  return (
    <div  className="login min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <img
                    className="mx-auto h-40 w-auto"
                    src="https://i.pinimg.com/originals/5d/25/36/5d25367b787a6e03a04d82df73f4e5bd.png"
                    alt="stars"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">Welcome Back!</h2>
            </div>
            <form className="mt-8 space-y-6"  
                onSubmit={async (e) => {
                    e.preventDefault()
                    const user = {
                        username,  
                        password
                    }
                    const res = await loginUser(user)
                    console.log(res)
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
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}

                            />
                        </div>
                        <br/>
                        <div>
                            <input
                                type = "password"
                                value ={password}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-lime-800 focus:ring-lime-500 border-gray-300 rounded"
                                />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-lime-800 hover:text-lime-500">
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <br/>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Login
                </button>
                </div>
        
            </form>
        </div>
    </div>
  )
}
