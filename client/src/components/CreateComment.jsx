import {useState} from 'react'

export default function CreateComment(props) {
    
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

  return (
    <form className='bg-neutral-200 flex flex-col p-6 mb-12' 
        onSubmit={(e) => {
            e.preventDefault()
            const comment = {
                title,
                content
            }
            props.handleCommentCreate(comment)
            setTitle('')
            setContent('')
        }}>
        <label>Title:</label>
        <input
            type= 'text'
            value= {title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <label>Your comment here:</label>
        <textarea
            type= 'text'
            value= {content}
            onChange={(e) => setContent(e.target.value)}
        />
        <br/>
        <button className=' className="mt-10 w-full bg-lime-700 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600'>
            Submit Comment!
        </button>
    </form>
  )
}
