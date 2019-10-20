import jwt from 'jsonwebtoken'

const checkAuthentication = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return false
  }

  let decodedToken

  try {
    decodedToken = jwt.verify(token, 'secretkey')
  } catch (error) {
    return false
  }

  if (!decodedToken) {
    return false
  }
  return true
}

export default checkAuthentication
