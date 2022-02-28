import {Link, Route} from 'react-router-dom'
import { Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar(props) {
  return (
    <Disclosure as="nav" className="bg-lime-800">
      {({ open }) => (
         <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link to="/"><h1>ReVogue</h1></Link>
                    <Link  to='/items'>Items</Link>
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
                </div>
              </div>
            </div>
          </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div>
                  <Link to='/' className='text-white'>Home</Link>
                </div>
                <div>
                  <Link to='/items' className='text-gray-200'>Items</Link>
                </div>
                {props.currentUser ?
                  <>
                    <Link to='/items/create' className='text-gray-200'>New Item</Link>
                    <h3 className='text-gray-200'>Welcome, {props.currentUser.username}!</h3>
                    <button className='text-gray-200' onClick={props.logout}>Log Out</button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                  </>
                }
              </div>
            </Disclosure.Panel>
          </>
        )
      }
    </Disclosure>
  )
}


