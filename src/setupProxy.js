const backendProxy = require("./backendProxy");

export default function (app) {
  app.use("/api", backendProxy);
}
