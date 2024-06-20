const express = require('express')
const cors = require('cors')
const multer = require('multer')
const fs = require('fs')
require('dotenv').config()
const OpenAI = require('openai')

/* ============================ Middleware ========================== */
const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

/* ============================ Multer ========================== */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage: storage }).single('file')

let filePath = ''

/* ============================ Post ========================= */
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        } 
        else {
           filePath = req.file.path
        }
    })
})


app.post('/ImageAnalyzer', async (req, res) => {

    try{
        const message = req.body.message
        console.log(message)
        const imageAsBase64 = fs.readFileSync(filePath, 'base64')
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages : [
                {
                    role: "user",
                    content: [
                        { type: "text", text: message },
                        { type: "image_url", image_url:{
                            url: `data:image/jpeg;base64,${imageAsBase64}`
                        }}
                    ]
                }
            ]
        })
        console.log(response.choices[0].message.content)
        res.send(response.choices[0].message.content)
    }
    catch(error){
        console.error("Error: ", error)
    }
})


/* ============================ Port ========================== */
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});