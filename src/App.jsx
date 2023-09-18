import { useState } from 'react' ;
//  import './index.css'
import { BrowserRouter } from "react-router-dom";

// import { styles } from "./style";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works,Works2, StarsCanvas } from "./components";

const App =() => {
  

  return (
  <BrowserRouter>
     <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='green-pink-gradient z-0' /> 
        <Experience />
        <Tech />
        <Works />
        <Works2 />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  </BrowserRouter>
  )
}

export default App
