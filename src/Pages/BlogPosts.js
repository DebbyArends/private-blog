import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function Blogposts() {

    const amountPosts = posts.length

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h4>Aantal blogposts:{amountPosts}</h4>
            <ul>
                {posts.map((post) =>{
                    return <li key={post.id}>
                        <Link to={`/blogposts/${post.id}`}>{post.title}</Link>
                    </li>})}
            </ul>
        </>
    )
}

export default Blogposts