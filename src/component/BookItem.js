import React from 'react';
import { Link } from 'react-router-dom';



const BookItem = (props) => {
    return(
    <div className="col mb-5">
        <div className="card h-100">
                <img className="card-img-top" src="https://storage.googleapis.com/du-prd/books/images/9780385546027.jpg" alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                            <h5 className="fw-bolder">....</h5>
                                Rp.50.000
            </div>
            </div>
                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                
                            <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to={' /details/${props.book.id}'}>View Details</Link></div>
                </div>
        </div>
    </div>
    );
}
export default BookItem;