const express = require('express');
const Route = express.Router(); 
const con = require('./DBConnection');
let users = [
    {
        id:1,
        name: 'kisalka1',
        university: 'rajarata1'
    },
    {
        id:2,
        name: 'kisalka2',
        university: 'rajarata'
    },
    {
        id:3,
        name: 'kisalka3',
        university: 'rajarata3'
    },
    {
        id:4,
        name: 'kisalka4',
        university: 'rajarata4'
    },
    {
        id:5,
        name: 'kisalka5',
        university: 'rajarata5'
    }
];

Route.get('/get-all-posts', (req,res) => {
    
    let query = `SELECT * from posts`
    console.log(req.body);
    con.query(query, (err, rows, fields) => {
        console.log(JSON.stringify(con.query(query)));
        if(!err){
            res.send(rows);
        }else{
            console.log(`Error: ${err} occured.`);
        }
    });
} )

// Route.post('/add-new-post', (req, res) => {
//     console.log(req.body);
//     let query = `INSERT INTO posts (name, age)
//     VALUES ('${req.body.name}', '${req.body.age}')`;

//     con.query(query, (err, rows, fields) => {
//         if (!err) {
//             res.send(rows);
//         } else {
//             console.log(`Error: ${err} occured.`);
//         }
//     })
// })

// Route.post('/update-post', (req, res) => {
//     console.log(req.body);
//     let query =  `UPDATE posts
//     SET name = '${req.body.name}', age= '${req.body.age}'
//     WHERE id = '${req.body.id}'`;   

//     con.query(query, (err, rows, fields) => {
//         if (!err) {
//             res.send(rows);
//         } else {
//             console.log(`Error: ${err} occured.`);
//         }
//     })
// })

// Route.post('/delete-post', (req, res) => {
//     console.log(req.body);
//     let query =  `DELETE FROM posts WHERE id='${req.body.id}'`;   

//     con.query(query, (err, rows, fields) => {
//         if (!err) {
//             res.send(rows);
//         } else {
//             console.log(`Error: ${err} occured.`);
//         }
//     })
// })



module.exports = Route;