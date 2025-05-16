import React from 'react'

export default function Button({children, className, onClick}) {
  return (
    <button className={`py-2 text-lg rounded-md ${className || ''}`} onClick={onClick}>{children}</button>
  )
}
