import jwt from 'jsonwebtoken'

export default async function protect(req, res, next){
    let token;
    if  (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ',)[1]
            jwt.verify(token, process.env.JWT_SK)
            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('not autorize')
        }
    }
}