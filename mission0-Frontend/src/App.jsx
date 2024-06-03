/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import { useState } from 'react'

/* ======================= Component ======================= */
import './App.css'
import HeadBar from './component/Headbar/headbar.jsx'
import HeadSection from './component/HeadSection/headSection.jsx'
import BodySection from './component/BodySection/bodySection.jsx'
import Footer from './component/Footer/footer.jsx'


/* ======================= App Function ======================= */
function App() {
  
  return (
    <div className='mainDisplay'>

      <section className='headBar'>
        <HeadBar />
      </section>

      <section className='headSection'>
        <HeadSection />
      </section>

      <section className='bodySection'>
        <BodySection />
      </section>

      <section className='footer'>
        <Footer />
      </section>

    </div>
  )
}

export default App
