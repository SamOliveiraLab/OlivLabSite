import React from 'react';
import './App.css';
import Header from './Components/Header';
import Features from './Components/Features';
//import Testimonials from './Components/Testimonials';
//Add testimonials later
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs/>
      <Features /> 
      <Footer />
    </div>
  );
}

export default App;
