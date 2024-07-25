import React from 'react'

export const Inputbox = ({ label, placeholder, onChange }) => {
  return (
    <div>
      <div>{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  )
}
