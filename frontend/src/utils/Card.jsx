import React from 'react'

export default function Card({children, className = ''}) {
  return (
    <div className={`${className} flex flex-col ring ring-gray-300 rounded-md`}>{children}</div>
  )
}
