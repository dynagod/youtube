import dotenv from "dotenv"
import { DB_NAME } from "../constants.js"

// import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

// connectDB();

console.log(process.env.MONGODB_URI, DB_NAME);