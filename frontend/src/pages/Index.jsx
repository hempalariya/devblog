import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Index() {

  const[blogData, setBlogData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('http://localhost:3000/api/blog')
        const data = await response.json()
        setBlogData(data)

        console.log(blogData)
        
      }catch(error){
        console.log(error)
      }

    }

    fetchData()
  }, [])

  return (
    <div className='flex-1 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 py-10'>
      {blogData.map((blog) => {
        return <Card blog = {blog}/>
      })}
    </div>
  )
}
