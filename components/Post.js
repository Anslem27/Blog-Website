import React from 'react'
import Link from 'next/link'


const Post = ({ post }) => {
    return (
        <div className='card'>
            <img src={post.content.cover_image}></img>
            <div className='post-date'>Posted on {post.content.date}</div>
            <h3>{post.content.title}</h3>
            <p>{post.content.excerpt}</p>
            <Link className='btn' href={`/blog/${post.slug}`}>
                Read more
            </Link>
        </div>
    )
}


export default Post