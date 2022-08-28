import { Database } from "../database";
import { insertOrUpdateUserProps } from "./types";

export class User extends Database {
    async getUserByPk(id: number) {
        return await this.getConnection().users.findFirstOrThrow({
            where: {
                id
            }
        })
    }

    async getUserByLogin(user: string, password: string) {
        return await this.getConnection().users.findFirstOrThrow({ 
            where: {
                user,
                password
            }
        })
    }

    async getAllUsers() {
        return await this.getConnection().users.findMany();
    }

    async deleteUser(id: number) {
        return await this.getConnection().users.delete({
            where: {
                id
            }
        });
    }

    async insertOrUpdateUser({ display_name, password, role, user, id }: insertOrUpdateUserProps) {
        return await this.getConnection().users.upsert({
            create: {
                password,
                role,
                user,
                display_name,
            },
            update: {
                password,
                role,
                user,
                display_name,
            },
            where: {
                id
            }
        });
    }
}