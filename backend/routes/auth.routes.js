const verifySignUp = require("../middleware/verifySignUp");
const verifyToken = require("../middleware/authJwt");
const authConfig = require("../config/auth.config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = require("../models");
const User = db.user;


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/signup", [verifySignUp.checkDuplicateEmail], (req, res) => {

    // verifySignUp passed -- so there is a valid user object in payload
    const newUser = req.body.user;
    console.log("New User:", newUser);

    User.create({
      email: newUser.email,
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      password: bcrypt.hashSync(newUser.password, 8),
    })
    .then(user => {
      res.status(200).send({
        email: user.email,
        id: user.id
      });
    })
    .catch(err => {
      console.log("Error creating new user:", err);
      res.status(500).send({ message: err.message });
    });  
  });

  app.post("/api/signin", (req, res) => {

    const {email, password} = req.body;
    if(null == email || null == password){
      return res.status(400).json("Invalid request");
    }

    User.findOne({
      where: {
        email: email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(400).json("Not a valid user.");
        }
  
        var passwordIsValid = 
          bcrypt.compareSync(password, user.password);
  
        if (!passwordIsValid) {
          return res.status(401).json("Unauthorized");
        }
  
        var token = jwt.sign({ id: user.id }, authConfig.secret, {
          expiresIn: 86400 // 24 hours
        });
  
        res.cookie('mariotoken', token, { httpOnly: true, secure: false, maxAge: 3600000 });

        return res.status(200).json("ok");
      })
      .catch(err => {
        console.log("Sign in error:" + err);
        res.status(500).send({ message: err.message });
      });
  });

  app.post("/api/signout", verifyToken,(req, res) => {
    res.cookie('mariotoken', "", { httpOnly: true, secure: false, maxAge: 0 });
    res.status(200).json("ok");
  });
};