const { Router, urlencoded } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db")
const jwt = require("jsonwebtoken")
const JWT_SECRET =  "deygobinda";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username: username,
        password : password
    })
    res.json({
        msg : "User created"
    })

});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            user
        },JWT_SECRET)
        res.json({
            token : token
        })
    }else{
        res.json({
            msg : "Invalid username or password"
        })
    }
});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    res.json({
        courses : courses
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    
    try{
       const username = req.headers.username;
    //    console.log(username)
       const courseId = req.params.courseId
        await User.updateOne({
            username : username
        }, {
            "$push" : {purchasedCourses : courseId}
        })
        res.json({
            msg : "course purchused"
        })
    }catch(e){
        res.json({
            err : e
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses :courses
    })
    
});

module.exports = router