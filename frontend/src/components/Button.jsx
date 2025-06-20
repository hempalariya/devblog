import React from 'react'

export default function Button({children}) {
  return (
    <button className='bg-blue-600 text-xl text-white p-2 rounded-md cursor-pointer'>{children}</button>
  )
}

