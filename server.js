import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';

import restaurantRouter from "./routes/restaurants.js";
import cuisineRouter from "./routes/cuisine.js";

const app = express()
app.use(express.json())
app.use(cors());

dotenv.config()


app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/restaurants', restaurantRouter);
app.use('/cuisine', cuisineRouter);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on 3000 or process.env.PORT ")
})