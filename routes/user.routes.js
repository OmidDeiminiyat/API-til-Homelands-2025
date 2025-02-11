const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);


router.get("/state", userController.getState);

module.exports = router;
