

import React from "react"

const CardSearchBook = (props) => {

    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.author}</h6>

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="..." class="card-img" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <p class="card-text">{props.body}</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                         </div>
                    </div>
                 </div>

                 <button>
                     Search
                 </button>
                 <button>
                     delete
                 </button>
            </div>
        </div>
    )



}