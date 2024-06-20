import { useState } from 'react'

import './App.css'


function App() {

  const [image, setImage] = useState(null)
  const [value, setValue] = useState('')
  const [response, setResponse] = useState('')
  const [error, setError] = useState('')

  const askOptions = 'What is the type, brand, model of the car in the image?'

  /* ============================ Upload Data to Server ======================= */
  async function uploadImage(e){
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    setImage(e.target.files[0])
    e.target.value = null

    try{
      const options = {
        method: 'POST',
        body: formData
      }
      const response = await fetch('http://localhost:8000/upload', options)
      const data = response.json()
      console.log(data)
    }
    catch(error){
      console.error("Error: ", error)
      setError("Something went wrong. Please try again.")
    }
  }


/* ================================= Ask Function ============================ */
function ask(){
  setValue(askOptions)
}


/* ================================ Analyze Image ============================ */
async function analyzeImage(){
  if(!image){
    setError("Error: No Image Selected")
    return 
  }

  try{
    const option = {
      method: 'POST',
      body: JSON.stringify({
        message: value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch('http://localhost:8000/ImageAnalyzer', option)
    setResponse(await response.text())
  }
  catch(error){
    console.error("Error: ", error)
    setError("Something went wrong. Please try again.")
  }
}

/* ================================= Rest Function ============================ */
function clear(){
  setImage(null)
  setValue('')
  setResponse('')
  setError('')
}



/* ================================= Main Display ============================ */
  return (
    <div className="app">
      <div className="title">
        <h1>Car Analyzer</h1>
      </div>
      <section className="search-section">

        <div className="image-container">
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" width="300px" height="auto" /> }
        </div>

        <p className="extra-info">
          <span>
            <label htmlFor='uploadFile' className="uploadImageText"><i>Upload an image </i></label>
            <input type="file" id="uploadFile" accept="image/*" hidden onChange={uploadImage} />
          </span>
          of your car.
        </p>

        <p>
          Click "Ask" to let the AI assistance to check the info of your car.
          <button className="askButton" onClick={ask} disabled={response}>Ask</button>
        </p>

        <div className="input-container">
          <input type="text" value={value} placeholder="The car info..." onChange={e => setValue(e.target.value)} />
          {(!response && !error) && <button className="button" onClick={analyzeImage}>Result</button>}
          {(response || error) && <button className="button" onClick={clear}>Reset</button>}
        </div>

        {error && <p> {error} </p>}
        {response && <p className="answer"> {response} </p>}

      </section>
    </div>
  )
}

export default App
