const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.get("/message/:id", (req, res) => {
  const { id, user } = req.params;

  res.send(`Message id ${id} for user ${user}`);
});

usersRoutes.get("/", (req, res) => {
  const { page, limit } = req.query;

  res.send(`Page: ${page}. Show: ${limit}`);
});

usersRoutes.post("/", (req, res) => {
  const { name, email, password } = req.body;

  res.json({ name, email, password })
})

module.exports = usersRoutes;