const { JWT_SECRET } = require('./config')
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Not valid' })
  }

  const token = authHeader.split(' ')[1]
  try {
    const verification = jwt.verify(token, JWT_SECRET)
    //  console.log({ verification })
    if (verification.userId) {
      req.userId = verification.userId
      next()
    } else {
      return res.status(403).json({ message: 'Token is not there' })
    }
  } catch (error) {
    return res.status(403).json({ message: 'Error occur' })
  }
}

module.exports = {
  authMiddleware,
}
