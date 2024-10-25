import "./SearchFilter.css"
// eslint-disable-next-line react/prop-types
export const SearchFilter = ({search,setSearch,filter,setFilter,Countries,setCountries}) => {

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
      };

    const handleFilterChange = (e) => {
    setFilter(e.target.value);
    };

    const handleSort = (val) => {
        const sort = [...Countries].sort((a,b)=> {
            return val === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sort)
    }

    return (
        <div className="search-filter-container">
          {/* Search Bar */}
          <input
            type="text"
            value={search}
            placeholder="Search..."
            onChange={handleSearchChange}
            className="search-input"
          />

      <button onClick={() => handleSort("asc")} className="sort-button">
        Ascending
      </button>
      <button onClick={() => handleSort("desc")} className="sort-button">
        Descending
      </button>
    
          {/* Filter Dropdown */}
          <select value={filter} onChange={handleFilterChange} className="filter-select">
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
          </select>
        </div>
      );
}