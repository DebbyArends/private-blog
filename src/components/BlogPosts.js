import React from 'react';
import posts from '../data/posts.json';

function Blogsposts() {
    console.log(posts)
    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts:</h2>
            <ul>
                {posts.map((post) =>{
                    return <li key={post.id}>
                        {post.title}
                    </li>})}
            </ul>
        </>
    )
}

export default Blogsposts