import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogForm from '../components/BlogForm'

export default function EditBlog() {
    const {id} = useParams()
 
    const [initialData, setInitialData] = useState(null)
    useEffect(()=> {
        const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/blog/${id}`);

        const data = await response.json();
        setInitialData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    }, [id])
    

    if(!initialData) return <div>Loading blog...</div>
  return <BlogForm isEdit = {true} initialData={initialData}/>
}
