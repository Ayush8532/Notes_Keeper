<<<<<<< HEAD
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
=======
const jwt = require('jsonwebtoken')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
};
>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = generateToken;