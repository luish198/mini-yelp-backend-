import express from 'express';
import mysql from "mysql";
import dotenv from "dotenv"
import cors from 'cors';

import restaurantRouter from "./routes/restaurants.js";
import cuisineRouter from "./routes/cuisine.js";


//const homeRouter =require('./routes/home')

dotenv.config()

const app = express()

app.use(cors())

const port = 3000

/*var pool = mysql.createPool({
    connectionLimit : 10,
    //host     : '107.6.183.178',
    host     : process.env.HOST,
    port     :  3306,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE

});*/

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/restaurants', restaurantRouter);
app.use('/cuisine', cuisineRouter);

//app.use('/restaurant', restaurantRouter);


/*app.get('/', (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from restaurants', (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })

    })
})*/



app.listen(proecess.env.PORT || port,()=>{
    console.log("server running on port"+port)
})