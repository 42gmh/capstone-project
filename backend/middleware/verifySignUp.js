const db = require("../models");
const User = db.user;

function isValidUser(user)
{
  if(null == user)
  {
    return {
      isValid: false,
      err: "No user specified."
    }
  }
  else if(null == user.email)
  {
    return {
      isValid: false,
      err: "User requires an email"
    }
  }
  else if(null == user.firstname)
  {
    return {
      isValid: false,
      err: "User requires a first name"
    }
  }
  else if(null == user.lastname)
  {
    return {
      isValid: false,
      err: "User requires a last name"
    }
  }
  else if(null == user.password)
  {
    return {
      isValid: false,
      err: "User requires a password"
    }
  }

  return {
    isValid: true,
    err: null
  }
}

checkDuplicateEmail = (req, res, next) => {

    const {user} = req.body;

    const validationResult = isValidUser(user);
    if(!validationResult.isValid)
    {
      return res.status(400).json(validationResult.err);
    }

    User.findOne({
      where: {
        email: user.email
      }
    }).then(user => {
      if (user) {
        return res.status(400).json("Email already in use.");
      }
      
      next();
    });
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;