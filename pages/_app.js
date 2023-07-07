import '../styles/globals.css'
import { Layout } from '../components';
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </ThemeProvider>
  )
}

export default MyApp
