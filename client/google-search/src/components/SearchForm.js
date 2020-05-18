import React from "react";
import PropType from 'prop-types'


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

SearchForm.PropType = {
clicked: PropType.func,
change: PropType.func,
searchValue: PropType.string,
}

export default SearchForm;