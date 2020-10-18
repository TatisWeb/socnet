import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Post.module.css';


const Navbar = () => {
    
    return( <div>
    
    <nav className="nav">  
    
    <div> <NavLink to="/Dialogs" activeClassName={s.active}> Dialogs </NavLink> </div>
    <div> <NavLink to="/Post" > Post </NavLink></div>
    <div> <NavLink to="/Content" > Music </NavLink></div>
    <div> Settings </div>  
    
    </nav>
    
    </div>);
};
 

export default Navbar;
