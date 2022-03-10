import React, { useState } from 'react';
import './App.css';
import {Switch, Route, NavLink} from "react-router-dom";
import HomePage from './components/HomePage'
import LoginPage from "./components/LoginPage";
import Blogsposts from "./components/BlogPosts";
import BlogsPostPage from "./components/BlogPostPage";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/blogposts">Blogposts</NavLink></li>
                <li><NavLink to="/blogposts/:blogId">Blog</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
        </Switch>
        <Switch>
            <Route path="/login">
                <LoginPage/>
            </Route>
        </Switch>
        <Switch>
            <Route exact path="/blogposts">
                <Blogsposts/>
            </Route>
        </Switch>
        <Switch>
            <Route path="/blogposts/:blogId">
                <BlogsPostPage/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
