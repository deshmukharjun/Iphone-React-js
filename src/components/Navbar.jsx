import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple logo"  width={14} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
    {navLists.map(({ name, link }) => (
        <a 
            key={name} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'
        >
            {name}
        </a>
    ))}
</div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt='search' width={18} height={18}></img>
                <img src={bagImg} alt='bag' width={18} height={18}></img>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
