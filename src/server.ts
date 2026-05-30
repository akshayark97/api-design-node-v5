import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { isTest } from '../env.ts'

const app = express()
app.use(helmet()) // for setting various HTTP headers to enhance security
app.use(cors())
app.use(
  morgan('dev', {
    skip: () => isTest(), // skip logging in test environment
  }),
) // for logging HTTP requests in development mode
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/health', (req, res) => {
  res.send('<h1>Server is healthy</h1>')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/habits', habitRoutes)

export { app }

export default app
