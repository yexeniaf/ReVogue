import {useState, useEffect} from 'react';
import{Link} from 'react-router-dom';

export default function Items(props) {
  return (
    <div>
       {
        props.items.map (item => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <img src={item.image_url}/>
            <h4>{item.title}</h4>
          </Link>
        ))
      }
    </div>
  )
}
