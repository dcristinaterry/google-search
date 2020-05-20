import React from "react";
import PropType from 'prop-types'


function SearchForm (props){

    return(
<div className="container pt-5 mt-5">
<form>
<div className="form-group">
<label htmlFor="search">Search For Books To Read</label>
    <input
    type="text"
    onChange={props.change}
    value={props.searchValue}
    className="form-control mb-2 border-dark"
    id="search"
    name="search"
    placeholder="Search for Books"
    >
    </input>
    <button className="btn-primary" onClick={props.clicked}>
        Search
    </button>
    </div>
</form>

</div>
    )

}

SearchForm.PropType = {
clicked: PropType.func,
change: PropType.func,
searchValue: PropType.string,
}

export default SearchForm;