import {Link, Route} from 'react-router-dom'
import { Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from "../images/logo.png"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props) {

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-lime-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-lime-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 flex items-center">
                  <img 
                    src= {logo}
                    className="block h-10 w-auto"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link className="bg-lime-800 text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/"><h1>Home</h1></Link>
                    <Link className="bg-lime-800 text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/items'>Items</Link>
                    {props.currentUser ?
                      <>
                        {props.currentUser.is_admin && <Link className="text-white hover:bg-lime-900  hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/items/create">New Item</Link>}
                        <button className="text-white hover:bg-lime-900  hover:text-white block px-3 py-2 rounded-md text-base font-medium"  onClick={props.logout}>Log Out</button>
                        {props.currentUser && <h3 className="bg-lime-800 text-white block px-3 py-2 rounded-md text-base font-medium" >Welcome, {props.currentUser.username}!</h3>}
                      </>
                      :
                      <>
                        <Link className="bg-lime-800 text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"to='/login'>Login</Link>
                        <Link className="bg-lime-800 text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/signup'>Sign Up</Link>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <div>
                  <Link  to='/' className="text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                </div>
                <div>
                  <Link to='/items' className="text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Items</Link>
                </div>
              {props.currentUser ?
                <>
                  {props.currentUser.is_admin && <Link className="text-white hover:bg-lime-900  hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/items/create">New Item</Link>}
                  <h3 className="text-white  block px-3 py-2 rounded-md text-base font-medium">Welcome, {props.currentUser.username}!</h3>
                  <button className="text-white block px-3 py-2 rounded-md text-base font-medium" onClick={props.logout}>Log Out</button>
                </>
                :
                <>
                  <Link className="text-white hover:bg-lime-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/login'>Login</Link>
                  <Link className="text-white hover:bg-lime-900  hover:text-white block px-3 py-2 rounded-md text-base font-medium" to='/signup'>Sign Up</Link>
                </>
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


