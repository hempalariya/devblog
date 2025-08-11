import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ShowComments({id, setCommentCount}) {

    const [comments, setComments] = useState()
    const [loading, setLoading] = useState(true)

    const token = useSelector((state) => state.user.user.token)

    useEffect(() =>{

        try {
            const fetchBlogComments = async ()=> {
           const response = await fetch(`http://localhost:3000/api/blog/comments/${id}`,
            {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }
           )
           const data = await response.json()
           setComments(data.comments)
           setLoading(false)
           
        }

        fetchBlogComments()
        } catch (error) {
            console.log(error)
        }
        
    }, [])

    if(loading) return <div>Loding...</div>

  return (
    <div>
        {
            comments.map((comment) => {
                return <div key = {comment._id}>{comment.comment}</div>
            })
        }
    </div>
  )
}
