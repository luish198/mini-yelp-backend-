import pool from '../utilities.js'
import express from 'express';


// test with the filter instead

export function getFilter(req, res) {
    const {city, cuisine} = req.query
    console.log(req.query)
    const allRestaurants = `SELECT * , restaurants.name as name, cities.name as city FROM cuisine RIGHT JOIN combine ON cuisine.id=combine.cuisine_id RIGHT JOIN restaurants ON restaurants.id=combine.restaurant_id RIGHT JOIN cities ON cities.id = restaurants.city_id   WHERE cuisine.name =? AND cities.name=?`
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    connection.query(allRestaurants, [cuisine, city], (err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
}


