import mysql from "mysql";
import dotenv from "dotenv"
dotenv.config()


var pool = mysql.createPool({
    connectionLimit : 10,
    //host     : '107.6.183.178',
    host     : process.env.HOST,
    port     : process.env.PORT,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE

});

export default pool