import React from 'react'

export default function Comments(props) {
  return (
    <div>
      <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
        <h1 className="items-title about-title block text-white text-border-2 xl:inline"> Comment Section:</h1>
      </div>
    <div className='comment-container overflow-scroll border-8'>
    <div >
      {props.comments && 
        props.comments.map(comment => (
        
          <div key={comment.id} >
            <h3>{comment.title}</h3>
            <h4>Author: {comment.user.username}</h4>
            <p>{comment.content}</p>

            {
              props.currentUser?.id === comment.user_id ?
                <>
                  <button>Edit</button>
                  <button onClick={() => props.handleCommentDelete(comment.id)}>
                    Delete
                  </button>
                </>
                :
                null
            }
          
          </div>
        ))
      }
    </div>
    </div>
    </div>
  )
}