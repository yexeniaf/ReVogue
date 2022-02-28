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
    <div>
        {
            item?.id ?
            <>
                <img src={item.image_url} />
                <h3>{item.title}</h3>
                <h4>${item.price}</h4>
                <h4>{item.size}</h4>
                <h4>{item.condition}</h4>
                <h5>{item.category}</h5>

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
                <CreateComment handleCommentDelete={ handleCommentCreate}/>
                <Comments
                    currentUser = {props.currentUser}
                    comments = {comments}
                    handleCommentDelete={handleCommentDelete}
                />
            </>
            :
            <h3>No Item Found</h3>
        }
    </div>
  )
}
