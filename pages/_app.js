import '../styles/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>

      {/* Top nav bar */}
      <Header />

      <main className='conatainer'>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>

  )
}

export default MyApp
