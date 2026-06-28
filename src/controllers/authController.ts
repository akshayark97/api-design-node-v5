import type { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { db } from '../db/connection.ts'
import { users } from '../db/schema.ts'

export const register = (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.error('Registration error', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
}
