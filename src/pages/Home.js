import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Navigation from '../component/Navigation';
import Books from '../component/Books';
const Home = () => {
    return(
    <>
        <Navigation />
        <Header />
        <Books />
        <Footer />
    </>
    );
}
export default Home;