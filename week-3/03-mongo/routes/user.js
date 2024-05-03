const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });
  res.json({
    msg: "User crated",
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    course: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const courseId = req.params.courseId;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Update the user's purchasedCourses array with the new courseId
    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({ msg: "Course purchased successfully" });
  } catch (error) {
    console.error("Error purchasing course:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic

  const user =await User.findOne({
    username : req.headers.username
  })
  console.log(user.purchasedCourses)
  const courseIds = await Course.find({
        _id: {
            "$in" : user.purchasedCourses
        }
  })

  res.json({
    courses : courseIds
  })
});

module.exports = router;
