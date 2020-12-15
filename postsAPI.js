const express = require('express');
const Route = express.Router(); 
const con = require('./DBConnection');

Route.get('/get-all-posts', (req,res) => {
    let query = `SELECT * FROM posts`;
    
    con.query(query, (err, rows, fields) => {
        if(!err){
            res.json(rows);
            
        }else{
            console.log(`Error: ${err} occured.`);
        }
    });
} )

Route.post('/add-new-post', (req, res) => {
    console.log(req.body);
    let query = `INSERT INTO posts (name, age)
    VALUES ('${req.body.name}', '${req.body.age}')`;

    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

Route.post('/update-post', (req, res) => {
    console.log(req.body);
    let query =  `UPDATE posts
    SET name = '${req.body.name}', age= '${req.body.age}'
    WHERE id = '${req.body.id}'`;   

    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})

Route.post('/delete-post', (req, res) => {
    console.log(req.body);
    let query =  `DELETE FROM posts WHERE id='${req.body.id}'`;   

    con.query(query, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`Error: ${err} occured.`);
        }
    })
})



module.exports = Route;