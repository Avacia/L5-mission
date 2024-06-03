const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
require("dotenv").config()
const port = process.env.PORT_NAME


app.use(cors())
app.use(express.json())


app.get('/api/coins', async (request, response) =>{
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params:{
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page:100,
                page:1,
                sparkline:false
            }
        })
        response.json(response.data)
    }
    catch(error){
        res.status(500).send(error.message)
    }
})


app.listen(port, () =>{
    console.log(`The server is listening at http://localhost:${port}`)
})