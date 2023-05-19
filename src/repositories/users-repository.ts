import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(data: Prisma.UserCreateInput): Promise<User>;
    update(id: string, data: Prisma.UserUpdateInput ): Promise<User>;
    delete(id: string): Promise<void>;
}