const express = require("express");
const router = express.Router();

const userController = require("../../controllers/userController");

router.get("/", (req, res) => {
  res.send("This is Home");
});


router.post("/v1/user/", userController.getInforUser);

module.exports = router;
