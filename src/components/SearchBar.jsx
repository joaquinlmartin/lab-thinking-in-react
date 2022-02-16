import { useState } from "react";

function SearchBar({onFilter}) {
    
    const handleInput = element => {
        onFilter(e.target.value)
    }

    return (
        <div>
            <h4>Search</h4>
            <div>
                <input type="search"  onChange={handleInput} className="search-bar" placeholder="Search..."/>
            </div>
            <div className="div-show">
                <button type="submit" className="btn-show"></button><> Only show products in stock </>
            </div>
        </div>
    )
}

export default SearchBar;