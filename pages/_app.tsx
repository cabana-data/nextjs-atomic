import i18n from '../i18n'
import '../styles/globals.css'
// import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default i18n.appWithTranslation(MyApp)
