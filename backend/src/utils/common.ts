import * as bcrypt from 'bcrypt'

export const hashPassword = async (password:string):Promise<string> => {
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    return await bcrypt.hash(password,salt)
}

export const comparePassword = async (password: string, hash: string)=>{
    return await bcrypt.compare(password,hash)
} 