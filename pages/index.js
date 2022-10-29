import Head from 'next/head'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Post from './components/Post'


export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <Head>
        <title>Blog App</title>
      </Head>
      {/* Display posts map */}
      <div className='posts'>
        {posts.map((post, index) => {
          return (<Post post={post} />)
        })}

      </div>

    </>
  )
}

export const getStaticProps = async () => {
  /* fetch files from post folder as an array */
  const files = fs.readdirSync(path.join('posts'))

  //map from file(path) list 
  const posts = files.map(filename => {

    // remove extension
    const slug = filename.replace('.md', '')

    //get actual markdown
    const markdownwithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    // use gray-matter package to frontmatter from  the markdown
    const { data: content } = matter(markdownwithMeta)
    return {
      slug,
      content
    }
  })


  return {
    props: {
      posts: posts
    }
  }
}