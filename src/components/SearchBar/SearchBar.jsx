import { Search } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./SearchBar.css"
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

  const topNavSearchEnterBtnLogo = {
    width: "100%",
    height: "100%",
    padding: "5px",
    color: "#0f0f0f"
  }
  return (
    <div id='topNavSearchDiv'>
      <form className='searchForm' onSubmit={searchSubmit}>
        <input type="text" placeholder='Search' className='topNavSearchBar' value={searchValue} onChange={(e) => {
          setSearchValue(e.target.value)
        }} />
        <button type="submit" className='topNavSearchEnterBtn' title='search'>
          <Search sx={topNavSearchEnterBtnLogo} />
        </button>
      </form>

    </div>
  )
}

export {SearchBar}