import React from "react";


function SearchForm (props){
<div>
<form>
    <input
    type="text"
    onChange={props.change}
    value={props.searchValue}
    >
    </input>
    <button onClick={props.clicked}>
        Search
    </button>

</form>

</div>


}

export default SearchForm;