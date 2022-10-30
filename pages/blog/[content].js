import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'

const PostPage = ({ data: { title, date, cover_image }, content, info }) => {
    return (
        <>
            <Link href='/' className='btn btn-back'> Go Back</Link>
            <div className='card card-page'><h1 className='post-title'>{title}</h1> </div>
            <div className='post-date'> Posted on {date}</div>
            <img src={cover_image} alt={title}></img>
            <div className='post-body'>
                <div dangerouslySetInnerHTML={{ __html: marked(info) }}></div>
            </div>
        </>
    )
}

export default PostPage

export const getStaticProps = async ({ params: { content } }) => {

    const markdownwithMeta = fs.readFileSync(path.join('posts', content + '.md'), 'utf8')

    const { data: data, content: info } = matter(markdownwithMeta)

    return {
        props: {
            content,
            data,
            info
        }
    }
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(filename => ({
        params: {
            content: filename.replace('.md', '')
        }
    }))

    return {
        paths: paths,
        //return 404 page when route is null
        fallback: false
    }
}