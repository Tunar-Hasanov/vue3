import jwt from 'jsonwebtoken'

const SECRET =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczMjAxMzI2MCwiaWF0IjoxNzMyMDEzMjYwfQ.bCCEKeBb5Qo5kLUTQaPfioLsZHdTZkk-OWBpxzOOx04'
const verifyToken = (req, res, next) => {
  try {
    // Check if Authorization header exists
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization header missing or malformed' })
    }

    // Parse token from the Authorization header
    const token = authHeader.split(' ')[1]

    // Verify token
    const payload = jwt.verify(token, SECRET)
    req.user = payload // Attach user info to the request object
    next()
  } catch (error) {
    console.error('Token verification error:', error.message) // Log the error for debugging
    res.status(401).json({ error: 'Invalid or expired token' })
  }
}

export default verifyToken
