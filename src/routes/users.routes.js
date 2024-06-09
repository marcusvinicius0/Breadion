const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

function appMiddleware(req, res, next) {
  console.log("You passed thought middleware.");

  if (!req.body.isAdmin) {
    return res.status(401).json({ message: "User unauthorized." });
  }

  next();
}

const usersController = new UsersController();

// usersRoutes.get("/message/:id", (req, res) => {
//   const { id, user } = req.params;

//   res.send(`Message id ${id} for user ${user}`);
// });

// usersRoutes.get("/", (req, res) => {
//   const { page, limit } = req.query;

//   res.send(`Page: ${page}. Show: ${limit}`);
// });

usersRoutes.post("/", appMiddleware, usersController.create);

module.exports = usersRoutes;
