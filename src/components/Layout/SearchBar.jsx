import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { MdImageSearch } from 'react-icons/md';


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();
  const searchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search/${searchValue}`)
    }
    setSearchValue("")
  }



  return (
    <div className='w-full h-full flex-row items-center justify-center'>

      <form className='h-full w-full flex items-center justify-between border border-slate-200 rounded-md bg-white' onSubmit={searchSubmit}>

        <input type="text" placeholder='Search' className='h-full min-w-3 outline-none border-none rounded-3xl flex-1 px-2' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} />

        <button type="submit" className='w-11 h-full outline-none border-l border-slate-400 bg-slate-200 hover:bg-slate-400 focus:bg-slate-400 disabled:border-transparent cursor-pointer' title='search'>
          <MdImageSearch className="w-full h-full p-1 text-slate-800" />
        </button>
      </form>

    </div>
  )
}

export default SearchBar