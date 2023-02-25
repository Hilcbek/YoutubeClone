import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
export const SearchBar = () => {
  let navigator = useNavigate()
  let [search,setSearch] = useState('')
  let handler = (e) => {
    e.preventDefault()
      navigator(`/search/${search}`)
      setSearch('')
      console.log('hello')
    }
  return (
    <div className={'w-full md:w-auto mr-3'}>
       <form action="" onSubmit={handler} className={`flex xs:items-center xs:justify-start md:justify-center xs:w-[97%] md:w-auto xs:ml-7`}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} name="text" className='p-2 px-5 xs:w-[90%] md:w-[400px] bg-transparent outline-none border-[1px] rounded-3xl border-solid text-white placeholder:text-white border-white' placeholder='Search Videos...'/>
          <button><ImSearch className='z-10 text-white xs:text-xl xs:mr-3 sm:text-3xl ml-3 cursor-pointer' /></button>
        </form>
    </div>
  )
}
