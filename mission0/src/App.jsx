import { useState } from 'react'
import './App.css'
import HeadBar from './component/Headbar/Headbar.jsx'
import HeadSection from './component/HeadSection/headSection.jsx'
import BodySection from './component/BodySection/bodySection.jsx'

function App() {
  
  return (
    <div>
      <HeadBar />

      <section className='headSection'>
        <HeadSection />
      </section>

      <section className='bodySection'>
        <BodySection />
      </section>

    </div>
  )
}

export default App
