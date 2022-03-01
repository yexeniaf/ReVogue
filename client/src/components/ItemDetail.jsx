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
    console.log(props)

  return (
    <div className="pt-6">
        <div className=' flex  ml-4 right-0 text- font-sm tracking-tight text-gray-900 sm:text-3xl'>
            <Link to="/items">Back</Link>
        </div>
        {
            item?.id ?
                <>
                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 border-4">
                                <img src={item.image_url} alt={item.image_url} className="w-full h-full object-center object-cover" />
                            </div>
                            <br/>
                            <div className="mt-4 lg:mt-0 lg:row-span-3 ">
                                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 border-4">
                                <div className="mt-4 lg:mt-0 lg:row-span-3">
                                    <h2>Item information:</h2>
                                    <br/>
                                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
                                    <h4 className="text-2xl text-gray-900">${item.price}</h4>
                                    <br/>
                                    
                                        <h4>Size: {item.size}</h4>
                                        <h4 className="text-base text-gray-900"> Condition: {item.condition}</h4>
                                        <h5 className="text-sm font-medium text-gray-900"> Category: {item.category}</h5>

                                        {
                                            props.currentUser?.id === item.user_id ?
                                                <>
                                                    <Link to={`/items/${item.id}/edit`}>
                                                        <button>Edit Item</button>
                                                    </Link>
                                                    <button onClick={() => props.handleDelete}> Delete Item</button>
                                                </>
                                                :
                                                null   
                                        }
                                    </div>
                                </div>
                
                            </div>
                        </div>
                        <Comments
                            currentUser = {props.currentUser}
                            comments = {comments}
                            handleCommentDelete={handleCommentDelete}
                        />
                        <br/>
                        <CreateComment  handleCommentCreate={ handleCommentCreate}/>
                    </div>
                </>
            :
            <h3>No Item Found</h3>  
        }
    </div>
  )
}
