import React from 'react'

export default function Textarea({type, placeholder, value, name, onChange}) {
  return (
    <textarea placeholder={placeholder} value={value} name={name} onChange={onChange} className='text-xl border border-solid border-blue-500 rounded-md outline-none px-4 py-2'/>
  )
}

