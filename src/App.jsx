import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import ExpoQuevedo from './components/ExpoQuevedo'
import Affiliate from './components/Affiliate'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <ExpoQuevedo />
        <Affiliate />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
