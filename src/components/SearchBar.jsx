// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../data/Stores/actions"; // Verifica l'importazione

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(fetchSongs(query));
    }
  };

  return (
    <form onSubmit={handleSearch} className="d-flex mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control me-2"
        placeholder="Search for a song or artist"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
