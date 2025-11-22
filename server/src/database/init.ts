import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export class DbInitializer {

    private static DB_PATH: string;
    private connection: any;
    private sqlite: any;
    public response: object = {};
    private __filename!:any;
    private __dirname!:any;

    constructor() {
        //Attributes
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        const databaseName = "database.sqlite3"
        DbInitializer.DB_PATH = path.join(this.__dirname, databaseName);
        this.sqlite = sqlite3.verbose();

        //functions
        this.generateConnection();
    }

    private generateConnection(): void {
        this.connection = new this.sqlite.Database(DbInitializer.DB_PATH, (err: Error | null) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        })
    }

    static findDatabase(): boolean { 
        const exist = fs.existsSync(this.DB_PATH);
        return exist;
    }

    static async create(): Promise<DbInitializer | {"response":false}> {
        if(!this.findDatabase()) {
            const db = new DbInitializer();
            await db.generateTables();
            return db;
        }else{
            return {"response":false};
        }

    }

    private generateTables(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.serialize(() => {
                this.connection.run(
                    `CREATE TABLE IF NOT EXISTS activos (
                        codigo TEXT(10) NOT NULL,
                        nombre TEXT(20) NOT NULL,
                        marca TEXT(15) NOT NULL,
                        precio REAL NOT NULL,
                        modelo TEXT(15),
                        numero_serial TEXT(25),
                        id_categoria INTEGER,
                        id_estado INTEGER
                    );`,
                    (err: Error | null) => {
                        if (err) {
                            this.response = { response: err };
                            return reject(err);
                        }

                        this.response = { response: "Success" };
                        resolve();
                    }
                );
            });
        });
    }
}