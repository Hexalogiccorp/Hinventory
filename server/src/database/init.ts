import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export class DbInitializer {

    private static DB_PATH: string;
    private connection!: sqlite3.Database;
    private sqlite: sqlite3.sqlite3;
    public response: Record<string, unknown> = {};
    private __filename: string;
    private __dirname: string;

    constructor() {
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        const databaseName = "database.sqlite3"
        DbInitializer.DB_PATH = path.join(this.__dirname, databaseName);
        this.sqlite = sqlite3.verbose();

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
            await db.generateDataTables();
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

        } catch (err) {
            this.response = { response: err };
        }
    }

    private async generateDataTables(): Promise<void> {
        try {
            await this.runQuery(`
                INSERT INTO estado (id, nombre, descripcion) VALUES 
                    (1, 'Disponible', 'Activo listo para ser utilizado'),
                    (2, 'Reparacion', 'Activo que se encuentra en reparacion'),
                    (3, 'Dañado', 'Activo que se encuentra dañado');    
            `);

            await this.runQuery(`
                INSERT INTO categoria (nombre, siglas, descripcion) VALUES
                    ('Computadoras', 'PC', 'Equipos de cómputo'),
                    ('Mobiliario', 'MB', 'Muebles de oficina'),
                    ('Redes', 'RD', 'Equipo de red'),
                    ('Electrónicos', 'EL', 'Dispositivos electrónicos');
                `);

            await this.runQuery(`
                INSERT INTO activos (
                codigo,
                nombre,
                marca,
                precio,
                modelo,
                ultima_actualizacion,
                fecha_creacion,
                n_serial,
                id_categoria,
                id_estado
            ) VALUES
            (
                'ACT-0003',
                'Monitor Samsung',
                'Samsung',
                180000,
                'S24F350',
                time('now'),
                time('now'),
                'SMS24F350SN001',
                1, -- Computadoras
                1
            ),
            (
                'ACT-0004',
                'Teclado Mecánico',
                'Logitech',
                65000,
                'G413',
                time('now'),
                time('now'),
                'LOGG413SN002',
                1,
                1
            ),
            (
                'ACT-0005',
                'Mouse Inalámbrico',
                'Logitech',
                45000,
                'MX Master 3',
                time('now'),
                time('now'),
                'LOGMX3SN003',
                1,
                1
            ),
            (
                'ACT-0006',
                'Escritorio Oficina',
                'OfficePro',
                220000,
                'OP-Desk120',
                time('now'),
                time('now'),
                'OPDSK120SN004',
                2, -- Mobiliario
                1
            ),
            (
                'ACT-0007',
                'Silla Ergonómica',
                'Herman Miller',
                950000,
                'Aeron',
                time('now'),
                time('now'),
                'HMAERONSN005',
                2,
                1
            ),
            (
                'ACT-0008',
                'Switch 24 Puertos',
                'TP-Link',
                175000,
                'TL-SG1024',
                time('now'),
                time('now'),
                'TPLSG1024SN006',
                3, -- Redes
                1
            ),
            (
                'ACT-0009',
                'Proyector Epson',
                'Epson',
                680000,
                'PowerLite X49',
                time('now'),
                time('now'),
                'EPSX49SN007',
                4, -- Electrónicos
                1
            ),
            (
                'ACT-0010',
                'Impresora Laser',
                'HP',
                320000,
                'LaserJet Pro M404',
                time('now'),
                time('now'),
                'HPM404SN008',
                4,
                1
            );`);
            
            this.response = { response: "Success" };

        } catch (err) {
            this.response = { response: err };
            console.log(err);
        }
    }
}