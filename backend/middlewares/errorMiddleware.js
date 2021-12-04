// Get all 404
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// Convert HTML error message thrown with statusCode 200 to JSON error and statusCode 500
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV !== 'production' && err.stack,
  })
}

export { notFound, errorHandler }
