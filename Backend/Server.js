import express from 'express'
import cors from 'cors'
import { addContact } from './ContactController.js'

const app = express()

//middleware
app.use(express.json())
app.use(cors())


app.post('/portfolio/contact',addContact)

app.listen(5000)