#create package.json
```
npm init -y (y is optional)
```

#install neccesory packages
```
npm install --save express express-handlebars mysql body-parser 
npm install --save-dev nodemon
```

#in packege.json replace
```
"scripts": {
    "test": "node Index.js",
    "dev": "nodemon Index.js"
  },
```

#create DB connection
```
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql',
    multipleStatements: true
});

connection.connect((err) => {
    if(!err){
        console.log('connection to mysql Succeed!');
    }else{
        console.log('connection to mysql failed!');
    }

});
```

#create APIs
```
Route.get('/get-all-posts', (req,res) => {
    
    let query = `SELECT * from posts`   
    con.query(query, (err, rows, fields) => {
        console.log(JSON.stringify(con.query(query)));
        if(!err){
            res.send(rows);
        }else{
            console.log(`Error: ${err} occured.`);
        }
    });
} )
```

#APIS
```
//get-all-posts 
GET http://localhost:3000/posts/get-all-posts

//add-new-post
POST http://localhost:3000/posts/add-new-post (pass new record as json)

//update-post
POSThttp://localhost:3000/posts/update-post (pass record as json)

//delete-post
POST http://localhost:3000/posts/delete-post (pass record id as json)
```