import express, { Application, Request, Response } from 'express'
const path = require('path')

const app: Application = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.get('/query', (req: Request, res: Response) => {
    let { number } = req.query
    //@ts-ignore
    res.send((parseInt(number) + 1).toString())
})

app.get('/', (req: Request, res: Response) => {
    res.send('Greatest')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
}) 