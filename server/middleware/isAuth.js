const jwt = require('jsonwebtoken')

const isAuth = ({ req }) => {
  const token = req.headers.authorization
  if(!token) {
    return {
      isAuth: false
    }
  }

  let decodedToken

  try {
    decodedToken = jwt.verify(token, 'secretkey')
  } catch (error) {
    return {
      isAuth: false
    }
  }

  if(!decodedToken) {
    return {
      isAuth: false
    }
  }

  return {
    isAuth: true,
    userId: decodedToken.userId
  }
}

module.exports = isAuth