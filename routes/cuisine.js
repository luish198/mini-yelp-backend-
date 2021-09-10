import express from 'express';
import pool from '../utilities.js'

const router = express.Router()

router.get('/', (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from cuisine', (err, rows)=>{

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

        connection.query('SELECT * from cuisine WHERE id=?',[req.params.id], (err, rows)=>{

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

