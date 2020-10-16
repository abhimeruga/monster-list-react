import React from 'react'

function Search(props) {
    return (
        <div>
            <input type="search" onChange={props.searchFunctionality} />
        </div>
    )
}

export default Search
