import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import axios from 'axios';


// eslint-disable-next-line
const Books = () => {

// eslint-disable-next-line
const [books, setBooks] = useState([])

useEffect(() => {
const fetchBooks = async () => {
    const res = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YylrPhrhMlDKwXZ8oJAMXrnJnzKIZZaS'
    )
    setBooks(res.data.results.books)
    console.log(res.data.results.books)
}
fetchBooks()
}, []);


    return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5 ">
            <h2> Search Book</h2>
            <form>
                <input type="text" className="form-control"></input>
            </form>

            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              { books.map(book =>   <BookItem key={book.id} book={book} />)}
            </div>
        </div>
    </section>
    );
}
export default Books;