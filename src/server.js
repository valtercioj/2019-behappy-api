import Hapi from "@hapi/hapi";

import { root, tasks } from "./routes";

const server = new Hapi.Server({
  port: process.env.PORT || 8000
});

const init = async () => {
  server.route([].concat(root).concat(tasks));

  await server.start();
  console.log("Server is running");
};

init();
