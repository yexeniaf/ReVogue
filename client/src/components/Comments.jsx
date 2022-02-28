import React from 'react'

export default function Comments(props) {
  return (
    <div className='container overflow-y-scroll border-8'>
      <h1>Comment Section:</h1>
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
  )
}