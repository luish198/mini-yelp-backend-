import pool from '../utilities.js'
import express from 'express';


export default function getAll( req, res){
    
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from restaurants', (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}

export function getOneById( req, res){
    
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id ${connection.threadId}`)

        connection.query('SELECT * from restaurants WHERE id=?',[req.params.id], (err, rows)=>{

            connection.release()//return the connection to pool

            if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })

    })
}


export function getOneByName( req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * FROM `cuisine` RIGHT JOIN `combine` on `cuisine`.`id` = `combine`.`cuisine_id` RIGHT JOIN `restaurants` ON `restaurants`.`id` = `combine`.`restaurant_id`  WHERE `cuisine`.`name`=?',[req.params.names], (err, rows)=>{
            connection.release()//return the connection to pool
if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })

    })
}



// post test by LH

export function postNewRestaurant( req, res){

    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id ${connection.threadId}`)

        const params = req.body

        //query(sqlString, callback)
        connection.query('INSERT INTO restaurants SET ?',params , (err, rows)=>{
            connection.release()//return the connection to pool

            if(!err){
                res.send(`New Restaurant as: ${params.name} has been added`)
            }else{
                console.log(err)
            }
        })

        console.log(req.body)

    })
}





    
