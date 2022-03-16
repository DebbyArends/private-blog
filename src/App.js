import React, {useState} from 'react';
import './App.css';
import { Switch, Route, Redirect} from "react-router-dom";
import Navigation from './Components/Navigation'
import HomePage from './Pages/HomePage'
import LoginPage from "./Pages/LoginPage";
import Blogposts from "./Pages/BlogPosts";
import BlogPostPage from "./Pages/BlogPostPage";



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <div>
        <Navigation
            isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
        </Switch>
        <Switch>
            <Route path="/login">
                <LoginPage
                isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            </Route>
        </Switch>
        <Switch>
            <Route exact path="/blogposts">
                {isAuthenticated === true ? <Blogposts/> : <Redirect to="/"/>}
            </Route>
        </Switch>
        <Switch>
            <Route path="/blogposts/:blogId">
                {isAuthenticated === true ? <BlogPostPage/> : <Redirect to="/"/>}
            </Route>
        </Switch>
    </div>
  );
}

export default App;
