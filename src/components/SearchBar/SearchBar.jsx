import { KeyboardBackspaceRounded, Mic, Search } from '@mui/icons-material';
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

  const iconStyle = {
    width: {
      sm: "1.5em",
      xs: "1.4em"
    },
    height: {
      sm: "1.5em",
      xs: "1.4em"
    },
    fontSize: {
      sm: "1.5em",
      xs: "1.4em"
    },
    padding: "5px",
    borderRadius: "50%",
    transition: "0.1s ease",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#d3d3d3"
    }
  }

  const topNavSearchEnterBtnLogo = {
    width: "100%",
    height: "100%",
    padding: "5px",
    color: "#0f0f0f"
  }
  return (
    <div id='topNavSearchDiv' className='navBoxShowHide'>
      <KeyboardBackspaceRounded
        id="search_BackIcon"
        focusable="true"
        tabIndex="1"
        sx={{
          display: {
            xs: "inline-block",
            sm: "none"
          },
          ...iconStyle,
          marginRight: "5px"
        }}
        onFocus={() => {
          document.getElementById("topNavSearchDiv").classList.remove("fullSearchBar")
        }}
      />

      <form className='searchForm' onSubmit={searchSubmit}>
        <input type="text" placeholder='Search' className='topNavSearchBar' value={searchValue} onChange={(e) => {
          setSearchValue(e.target.value)
        }} />
        <button type="submit" className='topNavSearchEnterBtn' title='search'>
          <Search sx={topNavSearchEnterBtnLogo} />
        </button>
      </form>

      <Mic sx={iconStyle} title="voice search" />
    </div>
  )
}

export {SearchBar}