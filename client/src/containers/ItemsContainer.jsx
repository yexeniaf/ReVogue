import {useState, useEffect} from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import {  getAllItems, createItem, updateItem, deleteItem } from '../services/items';
import ItemDetail from '../components/ItemDetail';
import Items from '../components/Items';
import CreateItem from '../components/CreateItem';
import ItemEdit from '../components/ItemEdit'; 


export default function ItemsContainer(props) {
  const [items, setItems] = useState([])
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllItems()
      setItems(items)
    }
    fetchItems()
  }, [toggle])

  const handleCreate = async (formData) => {
    await createItem(formData)
    setToggle(prevToggle => !prevToggle)
    navigate('/items')
  }

  const handleEdit = async (id, formData) => {
    await updateItem(id, formData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/items/${id}`)
  }

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
