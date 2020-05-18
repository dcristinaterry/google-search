import React, { useState } from "react"
import API_server from "../utils/API_server.js"

const CardSearchBook = (props) => {


    // const handleSave = e => {
    //     API_server.saveBook({
    //         title: props.title, 
    //         author: props.author,
    //         image: props.image,
    //         body: props.body,
    //         link: props.link
    //     })

    // }

    return (
        <div className="container text-center row">
            
            <div className="card col" style={{ width: '80rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>

                    <div className="card mb-3" style={{ maxWidth: '900px' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={props.image} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text" >{props.body}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="btn  btn-light" href={props.link} target="_blank" rel='noreferrer noopener'>
                        view
                 </a>
                    <button onClick={props.save}>
                        save
                 </button>
                </div>
            </div>
        </div>
    )

}

export default CardSearchBook;