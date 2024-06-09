const AppError = require("../utils/AppError");

class UsersController {
  create(req, res, next) {
    const { name, email, password } = req.body;

    if (!name) {
      throw new AppError("Nome é obrigatório.");
    }

    res.status(201).json({ name, email, password });
  }


}

module.exports = UsersController;

// index - GET
// show - GET unique
// create - POST
// update - PUT/PATCH
// delete - DELETE
