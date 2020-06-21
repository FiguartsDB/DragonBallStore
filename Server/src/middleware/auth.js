import { isTokenValid } from '../utils/Auth/jwt'

const authHandler = () => { 
  return async (req, res, next) => { 
    try {
      const token = req.get('Authorization').split(' ')[1];

      if (!token) {
        req.isAuth = false;
        return next();
      }

      const decodedToken = await isTokenValid(token)
      if (!decodedToken) { 
        req.isAuth = false;
        return next();
      }
        
      req.isAuth = true;
      req.userId = decodedToken.userId;
      next();
    } catch (error) { 
      req.isAuth = false
      next()
    }
  }
}

export default authHandler