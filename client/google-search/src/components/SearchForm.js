import React from "react";


function SearchForm (props){
<div>
<form>
<div className="form-group">
<label htmlFor="search">Search:</label>
    <input
    type="text"
    onChange={props.change}
    value={props.searchValue}
    className="form-control"
    id="search"
    name="search"
    placeholder="Search for Books"
    >
    </input>
    <button onClick={props.clicked}>
        Search
    </button>
    </div>
</form>

</div>


}

export default SearchForm;