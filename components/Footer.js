import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/usghLogo.svg' alt="usgh Logo" width={10} height={20} />
          </span>
        usgh community <br /> 
        This is an unofficial website, updates may be delayed
        </div>
      </footer>
  )
}

export default Footer