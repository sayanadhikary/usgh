import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setblog] = useState(props.myBlog);

  return (
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>

      <div>{blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}</div>
    </main>
  )
}
export async function getServerSideProps(context) {

  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  let myBlog = await data.json()
  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}

export default Slug