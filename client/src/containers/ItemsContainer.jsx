import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {  getAllItems } from '../services/items';

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
      
    </div>
  )
}
