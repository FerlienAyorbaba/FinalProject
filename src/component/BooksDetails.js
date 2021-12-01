import React from 'react'
import { Link } from 'react-router-dom';


const BooksDetails = (props) => {
    const imageUrl = "https://storage.googleapis.com/du-prd/books/images/"
    return (
        <>
          <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src={imageUrl+props.imageUrl} />
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">Author: {props.author}</div>
                    <h1 className="display-5 fw-bolder">{props.book.author}</h1>
                    <div className="fs-5 mb-5">
                        <span>tittle {props.book.tittle}</span>
                    </div>
                    <p className="lead">{props.book.overview}</p>
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </>
    )
}

export default BooksDetails;
