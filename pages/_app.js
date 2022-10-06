import '../styles/globals.css'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>

    <h1 className={styles.title}>
      Udaynarayanpur State General Hospital
    </h1>

    <Navbar />
    <Component {...pageProps} />
    <Footer />  
    </>
}
export default MyApp
