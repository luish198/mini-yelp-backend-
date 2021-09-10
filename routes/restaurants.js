import express from 'express';
import pool from '../utilities.js'

const router = express.Router()

router.get('/', (req, res)=>{
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
})



router.get('/:id', (req, res)=>{
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
})


router.get('/cuisine/:names', (req, res)=>{
    console.log(req.params.names)
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
})


export default router

