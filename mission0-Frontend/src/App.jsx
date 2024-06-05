/* ============================== Import Files ============================== */
/* ======================= Library ======================= */
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

/* ======================= Component ======================= */
import './App.css'
import HeadBar from './component/Headbar/headbar.jsx'
import HeadSection from './component/HeadSection/headSection.jsx'
import BodySection from './component/BodySection/bodySection.jsx'
import Footer from './component/Footer/footer.jsx'


const client = new QueryClient();
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

      <QueryClientProvider client={client}>
        <section className='bodySection'>
          <BodySection />
        </section>
      </QueryClientProvider>

      <hr />
      <section className='footer'>
        <Footer />
      </section>

    </div>
  )
}

export default App
