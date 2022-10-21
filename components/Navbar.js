import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const navbar = () => {
  return (

    <nav className={styles.mainnav}>
      <ul>
        <Link href='/'><li>Home</li></Link>
        <Link href='/blog'><li>Outdoor</li></Link>
        <Link href='/Ot'><li>OT</li></Link>
        <Link href='/contact'><li>Contact</li></Link>        
      </ul>
    </nav>
  )
}

export default navbar