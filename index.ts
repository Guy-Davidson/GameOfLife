import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express();

interface Game {
    gameID: string,
    next: number[][] | null
}

const stateStore: { [key: string]: Game} = {}

const nextBoard = (board: number[][] | null) => {
    if(!board) return

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            board[i][j] = Math.random() > .5 ? 1 : 0
        }
    }
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.post('/init/id', (req: Request, res: Response) => {
    let { gameID } = req.query    

    if(typeof gameID !== 'string') {
        res.send("bad")
        return 
    }

    if(!(gameID in stateStore)) {
        stateStore[gameID] = { gameID, next: null }
        res.send("ok")
    }
})

app.post('/init/config', (req: Request, res: Response) => {
    let { gameID, config } = req.query  
    
    if(typeof gameID !== 'string' || gameID.length === 0 || !(gameID in stateStore)) {
        res.send("bad")
        return 
    }

    if(typeof config !== 'string' || config.length === 0) {
        res.send("bad")
        return 
    }

    let newBoard = new Array(50).fill(0).map(e => new Array(50).fill(0))
    let configArr = config.split(',')

    for(let idx = 0; idx < configArr.length - 1; idx += 2) {
        let i = parseInt(configArr[idx])
        let j = parseInt(configArr[idx + 1])
        newBoard[i][j] = 1
    }

    stateStore[gameID] = { gameID, next: newBoard }

    res.send("ok")
})

app.get('/next', (req: Request, res: Response) => {
    let { gameID } = req.query    

    if(typeof gameID !== 'string' || !(gameID in stateStore)) {
        res.send("bad")
        return 
    }

    res.send(stateStore[gameID].next)
    
    nextBoard(stateStore[gameID].next)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)  
}) 