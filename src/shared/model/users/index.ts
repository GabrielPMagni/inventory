import { Database } from "../database";

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
        return await this.getConnection().users.findMany()
    }
}