//server side

const express = require('express')
const appCtrl = require('./controllers/appCtrl')

const app = express()


const massive = require('massive')
require('dotenv').config()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
  app.set('db',dbInstance)
})


app.listen(SERVER_PORT, () => {
  console.log('listening on port:',SERVER_PORT)
}) 


app.get('/api/inventory',appCtrl.get)