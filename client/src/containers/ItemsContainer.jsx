import {useState, useEffect} from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {  getAllItems } from '../services/items';
import ItemDetail from '../components/ItemDetail';

export default function ItemsContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllItems()
      setItems(items)
    }
    fetchItems()
  }, [])

  return (

    
    <div>
      {
        items.map (item => (
          <Link key={item.id} to={`/items/${item.id}`}>
            <img src={item.image_url}/>
            <h4>{item.title}</h4>
          </Link>
        ))
      }

      <Routes>
        <Route path='/:id' element= {<ItemDetail />}/>
      </Routes>
    </div>
   
  )
}
