import React, { useState } from 'react'
import Button from './Button'
import { useSelector } from 'react-redux'
import { useToast } from '../store/ToastContext'

export default function CreateComment({id}) {
    const [comment, setComment] = useState('')
    const token = useSelector((state) => state.user.user.token)
    const {showToast} = useToast()
    
     async function handleAddComment(e){
      e.preventDefault()
      if(comment === '') {
        showToast('Comment can not be empty', 'Failed')
        return
      }
      try {
        const response = await fetch('http://localhost:3000/api/blog/comment', {
          method: 'POST', 
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            blog: id,
            comment
          })
        })
    
        const data = await response.json()
        console.log(data)
      } catch (error) {
        showToast(error.message, 'Failed')
      }
      }
  return (
    <div>
      <form action="">
        <textarea className="w-full border border-black resize-none" onChange={(e) => {
          setComment(e.target.value)
        }}></textarea>
        <Button onClick={handleAddComment}>Add Comment</Button>
      </form>
    </div>
  )
}
