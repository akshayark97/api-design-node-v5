import bcrypt from 'bcrypt'
import env from '../../env.ts'

export const hasPassword = async (password: string) => {
    return bcrypt.hash(password, env.BCRYPT_ROUNDS)
}