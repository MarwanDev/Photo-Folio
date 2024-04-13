import { Navbar } from '.'
import { Footer } from '.'
import { Route, Routes } from 'react-router-dom';
import { Home, Portfolio, Contact, About } from "../pages";


const Layout = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Layout