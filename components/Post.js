import React from 'react'
import Link from 'next/link'
import { Divider } from '@chakra-ui/react'


const Post = ({ post }) => {
    return (
        <div className='card' >
            <img  src={post.content.cover_image}></img>
            <div className='post-date'>Posted on {post.content.date}</div>
            <h3>{post.content.title}</h3>
            <p>{post.content.excerpt}</p>
            <Divider paddingTop="10px"/>
            <Link className='button-51' href={`/blog/${post.slug}`}>
                Read more
            </Link>
        </div>
    )
}


export default Post