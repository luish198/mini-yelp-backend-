import pool from '../utilities.js'


export default function getAll( req, res){


pool.getConnection((err, connection)=>{
    if(err) throw err
    console.log(`connection as id........ ${connection.threadId}`)
        connection.query('SELECT * from cities', (err, rows)=>{

        connection.release()//return the connection to pool
if(!err){
            res.send(rows)
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

        connection.query('SELECT * from cities WHERE id=?',[req.params.id], (err, rows)=>{

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

export function postNewCity( req, res){

    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id ${connection.threadId}`)

        const params = req.body

        //query(sqlString, callback)
        connection.query('INSERT INTO cities SET ?',params , (err, rows)=>{
            connection.release()//return the connection to pool

            if(!err){
                res.send(`New City as: ${params.name} has been added`)
            }else{
                console.log(err)
            }
        })

        console.log(req.body)

    })
}