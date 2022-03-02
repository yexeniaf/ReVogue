import React from 'react'

export default function Comments(props) {
  return (
    <div>
      <div className="text-xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
        <h1 className="items-title about-title block text-white text-border-2 xl:inline"> Comment Section:</h1>
      </div>
      <div className='comment-container overflow-scroll bg-white border-8'>
        <div>
          {props.comments && 
            props.comments.map(comment => (
              <div className=" mx-2 single-comment border-b-4" key={comment.id} >
                <h5 className='text-sm mb-3'>Author: {comment.user.username}</h5>
                <h3 className="font-bold text-lg pb-1">{comment.title}</h3>
                
                <p>{comment.content}</p>
                {
                  props.currentUser?.id === comment.user_id ?
                    <>
                      <button className= "m-3 bg-transparent hover:bg-red-500 text-red-700 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={() => props.handleCommentDelete(comment.id)}>
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