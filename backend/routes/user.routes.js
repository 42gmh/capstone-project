const verifyToken = require("../middleware/authJwt");

const db = require("../models");
const Mario = db.mario;
const User = db.user;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/getmarios", verifyToken, (req, res) => {

    Mario.findAll({
      where: {
        userId: req.userId
      }
    })
    .then((marios) => res.status(200).json(marios) )
    .catch(err => {
      console.log("Error loading Marios:", err);
      res.status(500).send({ message: err.message });
    });
  });

  app.post("/api/v1/savemario", verifyToken, (req, res) => {

    const aMario = req.body.mario;
    if(null === aMario.id)
    {
      // new mario
      return createNewMario(req, res, aMario);
    }
    else {
      //update to a mario
      return updateAMario(req, res, aMario);
    }
  });

  app.delete("/api/v1/deletemario", verifyToken, (req, res) => {

    console.log("Deleting:", req.body.marioId);

    Mario.findAll({
      where: {
        userId: req.userId,
        id: req.body.marioId
      }
    }).then((marios) => {
  
      console.log("MMMMMMM:", marios);
      if (1 === marios.length) {
        var theMario = marios[0];
  
        theMario.destroy()
                .then((count) => {
                  console.log("Deleted instances:", count);
                  res.status(200).json("ok")
                });
      }
      else { return res.status(400).json("No such Mario"); }
    }).catch(err => {
      console.log("Error updating Mario:", err);
      return res.status(500).send({ message: err.message });
    });
  

  });
};

function createNewMario(req, res, aMario) {
  Mario.findAll({
    where: {
      userId: req.userId,
      title: aMario.title
    }
  }).then((mario) => {

    if (0 === mario.length) {
      Mario.create({
        title: aMario.title,
        boots: aMario.boots,
        button: aMario.button,
        cap: aMario.cap,
        pants: aMario.pants,
        shirt: aMario.shirt,
        background: aMario.background,
        eyes: aMario.eyes,
        mustache: aMario.mustache,
        hair: aMario.hair,
        skin: aMario.skin,
        userId: req.userId
      }).then((newMario) => {
        return res.status(200).json(newMario);
      });
    }
    else {
      return res.status(400).json(`Mario portrait "${aMario.title}" already exists -- please select a dfferent name.`);
    }
  }).catch(err => {
    console.log("Error saving Mario:", err);
    return res.status(500).send({ message: err.message });
  });
}

function updateAMario(req, res, aMario) {
  Mario.findAll({
    where: {
      userId: req.userId,
      id: aMario.id
    }
  }).then((marios) => {

    if (1 === marios.length) {
      var theMario = marios[0];
      theMario.title = aMario.title;
      theMario.boots = aMario.boots;
      theMario.button = aMario.button;
      theMario.cap = aMario.cap;
      theMario.pants = aMario.pants;
      theMario.shirt = aMario.shirt;
      theMario.eyes = aMario.eyes;
      theMario.mustache = aMario.mustache;
      theMario.hair = aMario.hair;
      theMario.skin = aMario.skin;

      theMario.background = aMario.background;
      theMario.save()
              .then((updatedMario) => res.status(200).json(updatedMario));
    }
    else { return res.status(400).json("No such Mario"); }
  }).catch(err => {
    console.log("Error updating Mario:", err);
    return res.status(500).send({ message: err.message });
  });
}
