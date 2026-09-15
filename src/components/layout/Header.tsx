import React from 'react'

export default function Header() {

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <p className="text-lg font-bold">Ernest</p>
        <button className="flex-column">
            <p className="underline">log in</p>
        </button>
    </header>
  )
}
