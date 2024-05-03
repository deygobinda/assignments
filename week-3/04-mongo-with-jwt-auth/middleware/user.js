const jwt = require("jsonwebtoken")
const {User} = require("../db")

const JWT_SECRET =  "deygobinda";

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.token;
        // console.log(token)
        if(!token){
            res.json({
                msg : "Token not found"
            })
        }
        const decoded = jwt.verify(token,JWT_SECRET);
        // console.log(decoded)
        const user = User.findById(decoded.id);
        // console.log(user)
        if(!user){
            res.status(404).json({
                msg : "User not found"
            })
        }else{
            next()
        }
    }catch(err){
        res.json({
            msg : err
        })
    }
}

module.exports = userMiddleware;