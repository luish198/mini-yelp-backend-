import express from 'express';
//import mysql from "mysql";
import dotenv from "dotenv"
import cors from 'cors';

import restaurantRouter from "./routes/restaurants.js";
import cuisineRouter from "./routes/cuisine.js";


//const homeRouter =require('./routes/home')

dotenv.config()

const port = 3000
//const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(cors());


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/restaurants', restaurantRouter);
app.use('/cuisine', cuisineRouter);


/*app.listen(process.env.PORT || 3000,()=>{
    console.log("server running on port"+port)
})*/

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on 3000 or process.env.PORT ")
})