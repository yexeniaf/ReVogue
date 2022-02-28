import { useState } from 'react'

export default function CreateItem(props) {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [size, setSize] = useState('')
  const [condition, setConditon] = useState('')
  const [category, setCategory] = useState('')
  const [image_url, setImage_url] = useState('')
  
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
        placeholder='title'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder='price'
        type='number'
        onChange={(e) => setPrice(e.target.valueAsNumber)}
        value={price}
      />
      <input
        placeholder='size'
        type='text'
        onChange={(e) => setSize(e.target.value)}
        value={size}
      />
      <input
        placeholder='Condition'
        type='text'
        onChange={(e) => setConditon(e.target.value)}
        value={condition}
      />
      <input
        placeholder='Category'
        type='text'
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <input
        placeholder='image url'
        type='text'
        onChange={(e) => setImage_url(e.target.value)}
        value={image_url}
      />
      <button>Create</button>
    </form>
  )
}