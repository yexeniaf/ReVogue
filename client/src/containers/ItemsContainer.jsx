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

  const handleDelete = async (id) => {
    await deleteItem(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/items')
  }


  return (

    <div>
      
      <Routes>
        <Route 
          path='/' 
          element={<Items 
            items={items} 
            currentUser={props.currentUser}
          />}
        />
        <Route 
          path='/create' 
          element= {<CreateItem
            handleCreate={handleCreate}
          />}
        />
        <Route
          path='/:id/edit'
          element= {<ItemEdit
            handleEdit={handleEdit}
            items={items}
          />}
        />
        <Route
          path='/:id'
          element= {<ItemDetail
            items={items}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />}
        />
      </Routes>
    </div>
   
  )
}
