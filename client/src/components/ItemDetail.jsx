import {useState, useEffect} from 'react';
import {useParams, Link } from 'react-router-dom';
import { getItemComments, createComment, deleteComment } from '../services/comments';
import Comments from './Comments';
import CreateComment from './CreateComment';

export default function ItemDetail(props) {
    const [item, setItem] = useState({})
    const [comments, setComments] = useState([])
    const [toggle, setToggle] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const foundItem = props.items.find(item => {
            return item.id === parseInt(id)
        })

        const fetchComments = async () => {
            const comments = await getItemComments(id)
            setComments(comments)
        }
        fetchComments()
        setItem(foundItem)
    }, [id, props.items, toggle])

    const handleCommentCreate = async (formData) => {
        await createComment(id, formData)
        setToggle(prevToggle => !prevToggle)
    }

    const handleCommentDelete = async (comment_id) => {
        await deleteComment(id, comment_id)
        setToggle(prevToggle => !prevToggle)
    }

  return (
    <div className="pt-6">
        {
            item?.id ?
                <>
                    <div className="mt-6 sm:px-6 lg:max-w-7xl  lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 ">
                                <img src={item.image_url} alt={item.image_url} className="detailImage object-center object-cover shadow-md" />
                            </div>
                            <br/>
                            <div className="mt-4 lg:mt-0 lg:row-span-3 ">
                                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8 ">
                                    <div className="info-container mt-4 lg:mt-0 lg:row-span-3">
                                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Item information:</h2>
                                        <br/>
                                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
                                        <h4 className="text-2xl text-gray-900">${item.price}</h4>
                                        <br/>
                                        <h3 className="text-xl text-gray-900">Size: {item.size}</h3>
                                        <h4 className="text-xl text-gray-900"> Condition: {item.condition}</h4>
                                        <h5 className="text-xl text-gray-900"> Category: {item.category}</h5>
                                        </div>
                                        <br/>
                                        {
                                            props.currentUser?.id === item.user_id ?
                                                <>
                                                <div className='flex '>
                                                    <Link to={`/items/${item.id}/edit`}>
                                                        <button class="mr-1 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">Edit Item</button>
                                                    </Link>
                                                    <br/>
                                                    <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" onClick={() => props.handleDelete(item.id)}> Delete Item</button>
                                                </div>
                                                </>
                                                :
                                            null   
                                        }
                                    
                                </div>
                            </div>
                        </div>
                        <Comments
                            currentUser = {props.currentUser}
                            comments = {comments}
                            handleCommentDelete={handleCommentDelete}
                        />
                        <br/>
                        {props.currentUser && <CreateComment  handleCommentCreate={ handleCommentCreate}/>}
                    </div>
                </>
            :
            <h3>No Item Found</h3>  
        }
    </div>
  )
}
