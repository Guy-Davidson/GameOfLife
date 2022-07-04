import express, { Application, Request, Response } from 'express'
const path = require('path')

const app: Application = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const add = (a: number, b: number) => a + b

app.get('/', (req: Request, res: Response) => {
    console.log(add(99,1))
    res.send('hello world. greatest.')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
}) 