import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './SearchBar'
export const NavBar = () => {
  return (
    <div className='w-screen flex items-center py-2 justify-between xs:px-2 sm:px-20'>
        <Link to={'/'}>
            <div className='xs:w-10 xs:h-10 sm:w-16 sm:h-16 flex items-center justify-start'>
                <img className='w-full h-full object-cover' src={logo} alt="" />
            </div>
        </Link>
        <SearchBar />
    </div>
  )
}
