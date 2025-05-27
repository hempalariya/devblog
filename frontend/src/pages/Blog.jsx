import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

export default function Blog() {
    const {id} = useParams()
    const [blog, setBlog] = useState()
    const [error, setError] = useState("")

    useEffect(() => {

        async function fetchBlog(){

            try{
                const response = await fetch(`http://localhost:5000/api/blog/blog/${id}`)
                const data = await response.json()
                console.log(response, data)
                setBlog(data)
            } catch(error){
                setError("Something went wrong")
            }
        }
        fetchBlog()
    }, [id])
    if(error) return <p>{error}</p>
    if(!blog) return <p>Loding...</p>
    const sanitizedHTML = DOMPurify.sanitize(blog.blogData)
  return (
    <div>
        <h1>{blog.title}</h1>
        <h3>{blog.description}</h3>
        <div className='prose' dangerouslySetInnerHTML={{__html: sanitizedHTML}}/>
    </div>
  )
}
