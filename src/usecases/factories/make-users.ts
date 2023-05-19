import { PrismaUsersRepository } from "@/repositories/prisma/users-prisma-repository";
import { CreateUserUseCase } from "../users/create";
import { ListUsersUseCase } from "../users/list-users";
import { GetUserProfileUseCase } from "../users/get-user-profile";

const usersRepository = new PrismaUsersRepository();

export function makeCreateUserUseCase() {
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  return createUserUseCase;
}

export function makeListUsersUseCase() {
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  return listUsersUseCase;
}

export function makeGetUserProfileUseCase() {
  const useCase = new GetUserProfileUseCase(usersRepository);

  return useCase;
}

