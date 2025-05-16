import React from 'react'

export default function Input({type, placeholder, value, name, onChange}) {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} onChange={onChange} className='text-xl border border-solid border-blue-500 rounded-md outline-none px-4 py-2'/>
  )
}
