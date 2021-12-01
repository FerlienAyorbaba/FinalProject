import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BooksDetails from '../components/BooksDetails';
import axios from 'axios';


const Details = () => {
  const [book, setBooks] = useState({});
  const { bookId } = useParams();

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

  useEffect(() => {
    // hit TMDB endpoint to get details of a movie
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json ${bookId} ?api-key=YylrPhrhMlDKwXZ8oJAMXrnJnzKIZZaS`)
    .then(response => response.json())
    .then(data => setBooks(data));
    }, 
    // eslint-disable-next-line
  []);

 return(
    <>
      <Navigation />
      <BooksDetails book={book} />
      <Footer />
    </>
  );
}

export default Details;