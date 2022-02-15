import { useState } from "react";

function SearchBar({onFilter}) {
    // const [input, setInput] = useState({ name: ''});

    const handleInput = element => {
        // setInput(prev => {
        //     return {...prev, [element.target.name]: element.target.value, }
        // })
        onFilter(element.target.value)
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