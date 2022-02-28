import {useState} from 'react'

export default function CreateComment(props) {
    const [title, setTitle] = useState("")
    const [potentialBuyer, setPotentialBuyer] = useState()
    const [content, setContent] = useState("")


  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        const comment = {
            title,
            potentialBuyer,
            content
        }
        props.handleCommentCreate(comment)
    }}>
        <input
            type= 'text'
            value= {title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type= 'boolean'
            value= {potentialBuyer}
            onChange={(e) => setPotentialBuyer(e.target.value)}
        />
        <input
            type= 'text'
            value= {content}
            onChange={(e) => setContent(e.target.value)}
        />
        <button>Submit Review!</button>

    </form>
  )
}
