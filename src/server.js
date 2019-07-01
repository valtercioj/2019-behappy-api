import Hapi from "@hapi/hapi";
import { root, tasks } from "./routes";

const port = process.env.PORT || 8080;

const server = new Hapi.Server({
  port: port
});

const init = async () => {
  server.route([].concat(root).concat(tasks));

  await server.start();
  console.log("Server is running on: ", port);
};

init();
