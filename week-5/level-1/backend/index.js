const express = require("express");
const { User } = require("./db");
const app = express();

app.use(express.json());

app.post("/create-card", async (req, res) => {
  try {
    const cardDetails = req.body;
    const name = cardDetails.name;
    const description = cardDetails.description;
    const socialLink = cardDetails.socialLink;
    await User.create({
      name: name,
      description: description,
      socialLink: socialLink,
    });
    res.json({
      msg: "Card created",
    });
  } catch (err) {
    res.json({
      msg: err,
    });
  }
});

app.get("/cards", async(req,res)=>{
    const cards = await User.find({});
    res.json({
        cards : cards
    })
})

app.listen(3000);
