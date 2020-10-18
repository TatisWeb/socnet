import Content from './Content';
import Navbar from './Navbar';
import Header from './Header';
import React from 'react';
import './App.css';
import Post from './Post';
import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from './Dialogs';

const App = () => {
      
    
    return ( <BrowserRouter >
    
    <div className="app-wrapper">
    
    <Header />
    <Navbar />
    
    <Route path ='/Content' component={Content} />  
    <Route path='/Post' component={Post} />
    <Route path='/Dialogs' component={Dialogs} />
 
  </div>
  
  </BrowserRouter >
  
   );
};
 


export default App;