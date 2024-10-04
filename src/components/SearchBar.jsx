import '../styles/SearchBar.css'; 

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container search-container">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search for a breed..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;
