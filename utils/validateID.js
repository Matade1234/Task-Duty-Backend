
const mongoose = require('mongoose')

const validateid = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    return isValid
}


module.exports = validateid