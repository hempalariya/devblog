import React from 'react'

export default function Container({children}) {
  return (
    <div className='h-screen flex items-center justify-center border'>
        {children}
    </div>
  )
}
