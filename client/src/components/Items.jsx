import {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';

export default function Items(props) {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Items</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       {
        props.items.map (item => (
          <Link key={item.id} to={`/items/${item.id}`} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src={item.image_url} className="w-full h-full object-center object-cover group-hover:opacity-75"/>
            </div>
            <h4  className="mt-4 text-sm text-gray-700">{item.title}</h4>
          </Link>
        ))
      }
      </div>
      </div>
    </div>
  )
}
 