import React, {useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import styles from './styles.css'

function Navigation({isAuth}) {
    return (
        <nav>
            <ul className="test">
                    <li><NavLink to="/" activeClassName="App-link">Home</NavLink></li>
                <li>{isAuth === true ?<NavLink to="/blogposts" activeClassName="App-link">Blogposts</NavLink>:<Redirect to="/"/>}</li>
                    <li>{isAuth === false?<NavLink to="/login" activeClassName="App-link">Login</NavLink>:<Redirect to="/"/>}</li>
                <li>{isAuth === true?<button type="button">Uitloggen</button>:<Redirect to="/"/>}</li>
            </ul>
        </nav>
    );
}

export default Navigation;