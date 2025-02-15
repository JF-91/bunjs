import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from "pg";


class Database {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });
    }

    getPool() {
        return drizzle({client: this.pool});
    }
}

export default new Database();