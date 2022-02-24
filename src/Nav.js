import React, { useState } from 'react'

const Nav = () => {

  const [showMobile, setShowMobile] = useState(false)

  let links = [
    "HOME",
    "ESOVERSE",
    "OG TUNNEL NECKS",
    "ROADMAP",
    "MINT",
    "CONTACT US",

  ]

  return <nav className="">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-7">
        
          {/* <!-- Primary Navbar items --> */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map(key => {
              return <a key={key} href={`#${key}`} className="py-4 px-2 text-white  font-semibold">{key}</a>
            })}
          </div>
        </div>
        {/* <!-- Secondary Navbar items --> */}

        {/* <!-- Mobile menu button --> */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setShowMobile(!showMobile)} className="outline-none mobile-menu-button">
            <svg className=" w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* <!-- mobile menu --> */}

    {showMobile && <div className="mobile-menu">
      <ul className="">
        {links.map(key => {
          return <li><a key={key} href={`#${key}`} className="block text-sm px-2 py-4 text-white font-semibold">{key}</a></li>
        })}

      </ul>
    </div>}
  </nav>
}

export default Nav