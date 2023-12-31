import React from 'react'


function Navbar() {
  return (
    <nav className='flex justify-between items-center px-44 py-3 mb-5 cursor-pointer'>
      <header className='text-[#E95793] font-bold text-lg'>Graphic DESIGNING</header>
      <ul className='flex gap-10'>
        <li>
          Home
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Project
        </li>
      </ul>
      <button className='outline outline-1 outline-[#E95793] px-4 py-2 rounded-lg hover:bg-[#E95793]'>Hire Me</button>
    </nav>
  )
}

export default Navbar