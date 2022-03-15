import React, {useContext} from 'react'
import { UserContext } from '../context/UserProvider'

export default function Comment(props){
  const { title, comment, date_time, _id } = props
  const { deleteComment} = useContext(UserContext)

  return (
    <div className="comment">
      <h1>{ title }</h1>
      <h3 className='user-comment'>{ comment }</h3>
      <p>{ date_time }</p>
      <div className='comment-btn'>
      <button className='delete-comment-btn' onClick={e => deleteComment(_id)}>Delete</button>
      <button className='update-comment-btn'>Update</button>
      </div>

    </div>
  )
}