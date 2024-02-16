const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/", siteRouter);

  //   app.post("/search", (req, res) => {
  //     // get paramethod post url  ny body
  //     console.log(req.body);
  //     res.render("search");
  //   });
}

module.exports = route;
