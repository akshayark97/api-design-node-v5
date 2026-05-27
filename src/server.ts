import express from 'express'

const app = express()

app.get('/health', (req, res) => {
    res.send('<h1>Server is healthy</h1>')
})

export  { app }

export default app