import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res.send('<h1>Server is healthy</h1>')
})

app.post('/cake', (req, res) => {
  res.send('Ok')
})

app.post('/cake/:id', (req, res) => {
  res.send(`Send cake to me with ID: ${req.params.id}`)
})

app.post("/cake/:name/:id", (req, res) => {
    res.send("Send the cake to me with name: " + req.params.name + " and ID: " + req.params.id)
})

export { app }

export default app
