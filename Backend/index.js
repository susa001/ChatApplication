const express = require("express");
const mongoose = require("mongoose");
const userSchema = require("./userSchema");
const userRouter = require("./User");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://santhosh70103:12345@db.ehm7ueo.mongodb.net/?retryWrites=true&w=majority&appName=DB"
  )
  .then(() => {
    console.log("database connected succesfully");
  });

app.get("/", (req, res) => {
  res.send("welcome to backend");
});


//registeraation upadting  into data base-Fininshed
app.post("/", async (req, res) => {
  const data = req.body;
  console.log(data.userMobileNo);

  const newUser = new userSchema({
    name: data.userName,
    mobileno: data.userMobileNo,
    email: data.userEmail,
    password: data.userPassword,
  });

  console.log(newUser);

  newUser.save().then(() => {
    console.log("Data added  ");
  });
});


//login validation - Pending
app.post("/login", async (req, res) => {
  const data = req.body

  const UserMailorPhone=data.MailorPhone
  const UserPassword=data.Password

  const user =await userSchema.findOne({UserMailorPhone})
  console.log(user)
  
});

app.listen(8000, () => {
  console.log("listening......");
});

module.exports = app;
