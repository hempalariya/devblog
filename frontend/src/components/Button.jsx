import React from 'react'

export default function Button({children, onClick}) {
  return (
    <button className='bg-blue-600 text-xl text-white p-2 rounded-md cursor-pointer' onClick={onClick}>{children}</button>
  )
}

