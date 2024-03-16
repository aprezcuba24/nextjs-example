import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/category.entity"
import * as dotenv from 'dotenv'

dotenv.config({
  path: '.env.local'
})

const BASE_FOLDER = process.env.BASE_FOLDER || 'src'

console.log('BASE_FOLDER =>', BASE_FOLDER);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASENAME,
  synchronize: false,
  logging: true,
  entities: [Category],
  subscribers: [],
  "migrations": [
    `${BASE_FOLDER}/migrations/**/*.{ts,js}`
  ],
})
