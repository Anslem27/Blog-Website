import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>

      {/* Top nav bar */}
      <Header />

      <main className='conatainer'>
        <Component {...pageProps} />
      </main>

    </>

  )
}

export default MyApp


