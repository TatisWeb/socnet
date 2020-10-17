import Content from './Content';
import Navbar from './Navbar';
import Header from './Header';
import React from 'react';
import './App.css';

const App = () => {
    
    return ( <div className="app-wrapper">
    
    <Header />
    <Navbar />
    <Content />  
    
  </div> );
};
 


export default App;