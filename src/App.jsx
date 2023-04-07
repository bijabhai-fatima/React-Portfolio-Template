import React from "react"
import Header from "./comoponents/Header/Header"
import Nav from "./comoponents/Nav/Nav"
import About from "./comoponents/About/About"
import Experience from "./comoponents/Experience/Experience"
import Services from "./comoponents/Services/Services"
import Portfolio from "./comoponents/Portfolio/Portfolio"
import Testimonials from "./comoponents/Testimonials/Testimonials"
import Contact from "./comoponents/Contact/Contact"
import Footer from "./comoponents/Footer/Footer" 

const App = () =>  {
  return(
        <div>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer /> 
        </div>
  )
}

export default App;
