var express = require('express');
const userModel = require('./users');
var router = express.Router();
var cookieParser = require("cookie-parser")

/*  create req session  */

router.get('/', function (req, res) {
  req.session.testSession = "ban";
  res.render('index', { title: "Express" })

  console.log(req.session.testSession);

})

/*  read req session  */

router.get('/checkban', (req, res) => {
  if (req.session.testSession === "ban") {
    res.send("you are banned , Get the fuck out")
    //Check console for session
  }
  else {
    res.send("You aint banned , you can roam")
  }
});

/*  destroy req session  */

router.get('/remove-ban', (req, res) => {
  req.session.destroy((err) => {
    console.log(`unknown ${err} occurred`);
    res.send("Ban removed")
  })
})

/* Create User */
router.get('/create', async function (req, res) {
  const createdUser = await userModel.create({
    username: "aryan",
    age: 14,
    gender: "Male",
  });
  res.send(createdUser)
})

/* Read Users */
router.get("/users", async function (req, res) {
  let allUsers = await userModel.find()
  res.send(allUsers)
})

/* Delete User */

router.get('/delete', async (req, res) => {
  const deletedUser = await userModel.findOneAndDelete({
    username: "parth"
  })
  res.send(deletedUser)
})

/* Update User */

router.get('/update', async (req, res) => {
  const updateUser = await userModel.updateOne({ username: "yash" }, { $set: { username: "aryan" } })
  res.send(updateUser)
})


/* ======================================================================================================================= */
//COOKIES


//setting cookie
router.get('/' , (req,res)=>{
  res.cookie("name", "yash")
  res.render('index')
})

//reading cookie
router.get('/read' , (req,res)=>{
  console.log(`Cookie : ${res.cookie.name}`);
  res.render('index')
})






module.exports = router;
