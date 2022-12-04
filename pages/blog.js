import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props) => {
  const [blogs, setblogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {blogs.map((blogItem) => {
          return <div key={blogItem.title}>
            <Link href={`/blogpost/${blogItem.slug}`}>
              <div className={styles.card}>
                <h2>{blogItem.title}</h2>
                <p>{blogItem.metadesc.substr(0, 100)} ...<u><b>Read More</b></u>
                </p>
              </div>
            </Link>
          </div>
        })}
      </div>
    </main>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('https://usgh.in/api/blogs')
  let allBlogs = await data.json()
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blog