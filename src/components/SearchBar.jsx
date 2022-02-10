import { useState } from "react";

function SearchBar() {
    const [show, setShows] = useState(0);

    return (
        <div>
            <h4>Search</h4>
            <div>
                <button type="submit"></button><h4>Only show products in stock</h4>
            </div>
        </div>
    )
}

export default SearchBar;