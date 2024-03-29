"use client";   
import {useState} from "react"


function ButtonMnue() {
    const [nav , setNav] = useState(false)
    const handleNavOpen= () => {
        setNav(true)
    }
    const handleNavClose= () => {
        setNav(false)
    }
    

   
  return (
    <div>
    {!nav ?( <div onClick={handleNavOpen} className="block md:hidden">
    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>)
  :
  (<div className=" cursor-pointer" onClick={handleNavClose}>done</div>)
}
    </div>
  )
}

export default ButtonMnue;
