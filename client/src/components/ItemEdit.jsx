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
    const foundItem = props.items.find(item => {
      return item.id === parseInt(id)
    })
    if (foundItem) {
      setTitle(foundItem.title)
      setPrice(foundItem.price)
      setSize(foundItem.size)
      setConditon(foundItem.condition)
      setCategory(foundItem.category)
      setImage_url(foundItem.image_url)
    }
  }, [id, props.items ])

  return (
    <div className="mt-3 md:mt-0 md:col-span-2 mx-10">
      <form onSubmit={(e) => {
        e.preventDefault()
        const item = {
          title,
          price,
          size,
          condition,
          category,
          image_url
        }
          props.handleEdit(id, item)
      }}>
        <div className="sm:overflow-hidden">
          <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
            <h1 className="items-title about-title block text-white text-border-2 xl:inline"> Edit Item</h1>
          </div>
          <div className="px-4 py-5 bg-orange-300 space-y-6 sm:p-6 mt-8 md:my-10 ">
            <div className="grid grid-cols-3">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type='text'
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type='number'
                  onChange={(e) => setPrice(e.target.valueAsNumber)}
                  value={price}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
              <div className="grid grid-cols-3 ">
                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                  Size
                </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type='text'
                  onChange={(e) => setSize(e.target.value)}
                  value={size}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Condition
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <textarea
                  type='text'
                  onChange={(e) => setConditon(e.target.value)}
                  value={condition}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 ">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type='text'
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-3">
              <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type='text'
                  onChange={(e) => setImage_url(e.target.value)}
                  value={image_url}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}