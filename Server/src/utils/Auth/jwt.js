import jwt from 'jsonwebtoken'
import { jwtSecret } from '../../config'

const signToken = user => { 
    const payload = {
        sub: user.id,
        name: `${user.name} ${user.lastname}`,
        email: user.email
    }

    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' })
    return token
}

const isTokenValid = token => {
    return new Promise((resolve, reject) => {
        if (!token)
            reject({ error: "No token provided" })
        jwt.verify(token, jwtSecret, (error, decoded) => {
            if (error) reject({ error })
            
            resolve({ decoded })
        })
    })
}

export { 
    signToken,
    isTokenValid
}
