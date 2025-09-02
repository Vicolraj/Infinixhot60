import './App.css'

// IMPORTING COMPONENTS
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import AnimatedImg from './components/AnimatedImg.jsx'
import Specifications from './components/Specifications.jsx'
import Footer from './components/Footer.jsx'
import Product from './components/Product.jsx'

function App() {
 
  return (
    <>
      <AnimatedImg />
      <Header />
      <Hero />
      <Features />
      <Specifications />
      <Product />
      <Footer />
    </>
    
  )
}

export default App