import React from 'react'

export default function FormCard({children}) {
  return (
    <div className="w-[500px] ring-blue-300 ring px-4 py-8 rounded-2xl">
        {children}
    </div>
  )
}
