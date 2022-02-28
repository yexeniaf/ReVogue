import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

export default function ItemEdit(props) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState('')
  const [condition, setConditon] = useState('')
  const [category, setCategory] = useState('')
  const [image_url, setImage_url] = useState('')

  const {id} = useParams()

  useEffect(() => {
    const foundProduct = props.products.find(product => {
      return product.id === parseInt(id)
    })
    if (foundProduct) {
      setTitle(foundProduct.title)
      setPrice(foundProduct.price)
      setSize(foundProduct.size)
      setConditon(foundProduct.condition)
      setCategory(foundProduct.category)
      setImage_url(foundProduct.image_url)
    }
  }, [id, props.products ])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const product = {
        title,
        price,
        size,
        condition,
        category,
        image_url
      }
      props.handleCreate(product)
    }}>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='number'
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
      />
      <input
        type='text'
        onChange={(e) => setSize(e.target.value)}
        value={size}
      />
      <input
        type='text'
        onChange={(e) => setConditon(e.target.value)}
        value={condition}
      />
      <input
        type='text'
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <input
        type='text'
        onChange={(e) => setImage_url(e.target.value)}
        value={image_url}
      />
      <button>Create</button>
    </form>
  )
}