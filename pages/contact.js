import React, { useState } from 'react'
import styles from '../styles/contact.module.css'

const Contact = () => {
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [email, setemail] = useState('')
  const [concern, setconcern] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name: name, phone: phone, email: email, concern: concern };
    fetch('http://usgh.in/api/test/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thanks for Contact Us")
        setname('')
        setphone('')
        setemail('')
        setconcern('')
      })
      .catch((error) => {
      });
  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'concern') {
      setconcern(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="Name" className={styles.formlabel}>Name</label>
          <input className={styles.input} type="text" value={name} onChange={handleChange} placeholder="Enter Your Name" name='name' id="Name" aria-describedby="emailHelp" required />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="Phone" className={styles.formlabel}>Phone Number</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} placeholder="Enter Your Phone Number" name='phone' id="Phone" aria-describedby="emailHelp" required />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>Email address</label>
          <input className={styles.input} type="email" value={email} onChange={handleChange} placeholder="Enter Your Email Address" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea" className={styles.formlabel}>Your Concern</label>
          <textarea value={concern} onChange={handleChange} placeholder="Describe Your Concern Here" name='concern' id="floatingTextarea" required></textarea>
        </div>

        <button className={styles.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;