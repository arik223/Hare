import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
// import Routes from './Routes'

function Main(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        Nav goes here
      </header> */}
      <Navigation/>
      <div className='container'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Main
