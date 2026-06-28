import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.ts'
import { z } from 'zod'
import { authenticateToken } from '../middleware/auth.ts'
import { createHabit } from '../controllers/habitController.ts'

const createHabitSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  frequency: z.string(),
  targetCount: z.string(),
  tagIds: z.array(z.string()).optional()
})

const completeParamsSchema = z.object({
  id: z.string().max(3)
})

const router = Router()

// below this line it's required auth token to execute the routes
router.use(authenticateToken)

router.get('/', (req, res) => {
  res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
  res.json({ message: 'got one habbit' })
})

router.post('/', validateBody(createHabitSchema), createHabit)

router.delete('/:id', (req, res) => {
  res.json({ message: 'deleted habit' })
})

router.post("/:id/complete", validateParams(completeParamsSchema), (req, res) => {
    res.json({ message: 'habit marked as complete' }).status(201)
})


export default router