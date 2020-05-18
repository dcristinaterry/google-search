import React from "react"

const CardSaveBook = (props) => {

    // const [book, setBook] = useState({});


    return (
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.author}</h6>

            <div className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.image} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{props.body}</p>
                        </div>
                     </div>
                </div>
             </div>

             <a className="btn btn-light" href={props.link} target="_blank" rel='noreferrer noopener'>
                 view
             </a>
             <button onClick={props.deleteBtn}>
                 delete
             </button>
        </div>
    </div>
    )



}
export default CardSaveBook;