const express = require("express");
const next = require("next");
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();
    const ShowRoutes = require("./Routes/success.js");
    server.use("/api", ShowRoutes);
    // const Error = require("./Routes/error.js");
    // server.use("/api", Error);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    // models.sequelize.sync().then(function () {
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`>Ready on ${port}`);
    });
    // });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
