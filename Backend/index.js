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

//registeration upadting  into data base-Fininshed

app.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const existingUser = await userSchema.findOne({ 
      $or: [{ email: data.userEmail }, { mobileno: data.userMobileNo }] 
    });
    
    if (existingUser) {
      console.log("betta")
      return res.status(409).json({ success: false, message: "Email or number already in use" });
    }

    const newUser = new userSchema({
      name: data.userName,
      mobileno: data.userMobileNo,
      email: data.userEmail,
      password: data.userPassword,
    });

    console.log(newUser);

    await newUser.save().then(() => {
      console.log("Data added successfully");
    });
    
    res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ success: false, message: 'An error occurred during registration' });
  }
});


//login validation - Pending
app.post("/login", async (req, res) => {
  const data = req.body;

  const UserMailorPhone = data.MailorPhone;
  const UserPassword = data.Password;
 
  const user = await userSchema.findOne({ $or: [{ email: UserMailorPhone }, { phone: UserMailorPhone }] });
  console.log(user);
});

app.listen(8000, () => {
  console.log("listening......");
});

module.exports = app;
