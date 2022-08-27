import { PrismaClient } from "@prisma/client";

export class Database {
    connection: PrismaClient;
    constructor(){
        this.connection = new PrismaClient();
    }

    getConnection() {
        return this.connection;
    }
}