import React from 'react';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';

const About = () => {
    return(
        <>
        <Navigation />
        <div className="container">
        <h1>About Creator</h1>
        <p> Nama Lengkap : Ferlien Praycilia Ayorbaba</p>
        <p> NIM : 105011910017</p>
        <p> Program Studi : Sistem Informasi</p>
        <p>Universitas Klabat Airmadidi</p>
        </div>
        <Footer />
        </>
    );
}
export default About;