import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequlize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: "postgres",
        port: process.env.PGPORT,
        logging: false,
    }
);

export default sequlize;