module.exports = function (app) {
  const userRoute = require("./routing/userRoute");
  app.use(userRoute);

  //This is last route, Never bring it to above
  app.use(function (req, res) {
    res.status(404).json({ error: "Not Found" });
  });
};
