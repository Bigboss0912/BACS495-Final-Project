import React from 'react';

const SearchBar = ({ keyword, setKeyWord }) => {
  const barStyling = { width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem" };
  return (
    <input
      style={barStyling}
      key="rand1"
      value={keyword}
      placeholder={"Search"}
      onChange={ (e) => setKeyWord(e.target.value) }
      />
  );
}

export default SearchBar;