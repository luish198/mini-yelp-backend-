import mysql from "mysql";
import dotenv from "dotenv"
dotenv.config()


var pool = mysql.createPool({
    connectionLimit : 10,
    host     : process.env.HOST,
    port     : process.env.DB_PORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE

});

export default pool