import React from 'react';

const SearchBar = ({ keyword, setKeyword }) => {
  const barStyling = { width:"20rem", background:"#F2F1F9", border:"none", borderRadius:"33px", padding:"0.5rem" };
  return (
    <input
      style={barStyling}
      key="rand1"
      value={keyword}
      placeholder={"Search"}
      onChange={ (e) => setKeyword(e.target.value) }
      />
  );
}

export default SearchBar;