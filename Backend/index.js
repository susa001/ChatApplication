    const express = require('express');
    const mongoose=require('mongoose');
    const userSchema = require('./userSchema');
    const userRouter = require('./User');
    const cors = require('cors')
    const app = express();
    app.use(express.json());
    app.use(cors())
    
    

    mongoose.connect("mongodb+srv://santhosh70103:12345@db.ehm7ueo.mongodb.net/?retryWrites=true&w=majority&appName=DB").then(()=>{
        console.log("database connected succesfully")
    })

    app.get('/', (req, res) => {
        res.send('welcome to backend');
      });

  app.post('/',async (req,res)=>{
    const data=req.body
    console.log(req.body)
    
    
//    const newUser = new userSchema({
//    name:userName,
//    mobileno:usermobil,
//    email:useremail,
//    password:userpassword
        
//     })

//     console.log(newUser )
  })

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
      });
    
   

    

    app.listen(8000, () => {
        console.log('listening......');
    });

module.exports = app;





