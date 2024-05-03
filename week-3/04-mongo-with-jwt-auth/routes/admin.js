const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "deygobinda";

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "user successfully created",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.findOne({
    username,
    password,
  }).then((e) => {
    if (e) {
      const token = jwt.sign(
        {
          username: username,
          password: password,
          id: e._id,
        },
        JWT_SECRET
      );
      res.json({
        token: token,
      });
    } else {
      res.json({
        msg: "User not found",
      });
    }
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title: title,
    description: description,
    imageLink: imageLink,
    price: price,
  });

  res.json({
    msg: `Course created successfully with courseId : ${newCourse._id}`,
  });
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({})
    res.json({
        courses : courses
    })
});

module.exports = router;
