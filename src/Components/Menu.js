import React from 'react'
import '../App.css'

const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-400/50 border border-green-500 p-10 m-0 gap-6 drop-shadow-lg">
      <p className="text-lg font-light tracking-wide">How many countries, flags, and capitals can you name?</p>
      <button 
        className="transition duration-300 ease-in-out bg-green-200 
                  hover:scale-110 font-light text-black px-8 py-2 rounded tracking-wide">
          Start challenge
      </button>
    </div>
  )
}

export default Menu