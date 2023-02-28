const {CustomError} = require('../errors/custom-error')
const error = (err,req,res,next) => {
    if(err instanceof CustomError) {
        return res
        .status(err.status)
        .json({message:err.message})
    }
    return res
    .status(500)
    .json({message:err.status})
}

module.exports = error