import { FastifyInstance } from "fastify";
import { verifyJwt } from "@/http/middlewares/verify-jwt";

import { authenticate } from "./authenticate";
import { create } from "./create";
import { refresh } from "./refresh";
import { profile } from "./profile";
import { list } from "./list-users";

export async function usersRoutes(app: FastifyInstance) {
  app.post("/sessions", authenticate);
  app.post("/user", create);
  app.get("/users", { onRequest: [verifyJwt] }, list);
  app.patch("/token/refresh", refresh);

  /** Authenticated */
  app.get("/me", { onRequest: [verifyJwt] }, profile);
}
