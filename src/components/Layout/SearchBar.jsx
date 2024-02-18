import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { MdArrowLeft, MdImageSearch, MdSearch } from 'react-icons/md';


const SearchBar = () => {

  const [searchValue, setSearchValue] = useState("")
  const [showSearchBar, setShowSearchBar] = useState(false);

  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (searchValue && searchValue.length > 0) {
      navigate(`/search/${searchValue}`)
    }
    setSearchValue("")
  }



  return (
    <div className={`${showSearchBar ? "absolute w-full" : "w-9 static"} 600px:w-full h-9 600px:static flex-row items-center justify-center 600px:mt-2`}>

      {!showSearchBar && <MdSearch className="w-full h-full 600px:hidden p-1 text-slate-400" onClick={() => setShowSearchBar(true)} />}

      <form className={`h-full w-full ${showSearchBar ? "flex" : "hidden"} 600px:flex items-center justify-between border border-slate-200 rounded-md bg-white font-semibold overflow-hidden`} onSubmit={searchSubmit}>

        {showSearchBar && <MdArrowLeft className='w-6 h-6 600px:hidden' onClick={() => {
          setShowSearchBar(false);
          setSearchValue("");
        }} />}

        <input type="text" placeholder='Search' className='h-full w-full text-base outline-none border-none  flex-1 px-2 bg-transparent' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />

        <button type="submit" className='h-full outline-none border-l border-slate-400 bg-slate-200 hover:bg-slate-400 focus:bg-slate-400 disabled:border-transparent cursor-pointer' title='search'>
          <MdSearch className="w-full h-full p-1 text-slate-800" />
        </button>

      </form>

    </div>
  )
}

export default SearchBar