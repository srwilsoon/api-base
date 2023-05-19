import { makeListUsersUseCase } from "@/usecases/factories/make-users";
import { FastifyReply, FastifyRequest } from "fastify";

export async function list(request: FastifyRequest, reply: FastifyReply) {
  try {
    const listUsersUseCase = makeListUsersUseCase();

    const users = await listUsersUseCase.execute();

    return reply.status(200).send(users);
  } catch (err) {
    throw err;
  }
}
