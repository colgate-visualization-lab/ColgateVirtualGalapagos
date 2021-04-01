import { createServer, Model, JSONAPISerializer } from "miragejs";
import { iguanaSlides, modules } from "./db";

export default function () {
  createServer({
    // models: {},

    routes() {
      this.namespace = "api";

      this.get("/api/iguana", () => {
        return modules[1];
      });
    },

    // seeds(server) {
    //   server.create();
    // },
  });
}
