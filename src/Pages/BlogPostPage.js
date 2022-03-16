import React from 'react';
import posts from '../data/posts.json';
import { useParams } from "react-router-dom";

function BlogPostPage() {

    const {blogId} = useParams();

    const check = posts.find(post => {
        return post.id === blogId
    });

    return (
        <>
            <article>
                <h2>{check.title}</h2>
                <h4>{check.date}</h4>
                <p>{check.content}</p>
            </article>
        </>
    )
}

export default BlogPostPage
