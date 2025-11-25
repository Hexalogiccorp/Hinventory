import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export class DbInitializer {

    private static DB_PATH: string;
    private connection: any;
    private sqlite: any;
    public response: object = {};
    private __filename!: any;
    private __dirname!: any;

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

    static async create(): Promise<DbInitializer | { "response": false }> {
        if (!this.findDatabase()) {
            const db = new DbInitializer();
            await db.generateTables();
            return db;
        } else {
            return { "response": false };
        }

    }

    private runQuery(sql: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.connection.run(sql, (err: Error | null) => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    private async generateTables(): Promise<void> {
        try {

            await this.runQuery(`
            CREATE TABLE IF NOT EXISTS categoria (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT(35) NOT NULL,
                siglas TEXT(2),
                descripcion TEXT(30)
            );
        `);

            await this.runQuery(`
            CREATE TABLE IF NOT EXISTS estado (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT(35) NOT NULL,
                descripcion TEXT(30)
            );
        `);

            await this.runQuery(`
            CREATE TABLE IF NOT EXISTS activos (
                codigo TEXT(10) PRIMARY KEY,
                nombre TEXT(20) NOT NULL,
                marca TEXT(15),
                precio INT,
                modelo TEXT(15),
                ultima_actualizacion TIME,
                fecha_creacion TIME,
                n_serial TEXT(25),
                id_categoria INT,
                id_estado INT,
                FOREIGN KEY (id_categoria) REFERENCES categoria(id),
                FOREIGN KEY (id_estado) REFERENCES estado(id)
            );
        `);

            await this.runQuery(`
            CREATE TABLE IF NOT EXISTS imagen_activo (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                imagen BLOB,
                codigo_activo TEXT(10),
                FOREIGN KEY (codigo_activo) REFERENCES activos(codigo)
            );
        `);

            this.response = { response: "Success" };

        } catch (err: any) {
            this.response = { response: err };
            throw err;
        }
    }
}