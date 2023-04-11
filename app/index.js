const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const sql = 'INSERT INTO people (name) values ("Ibere");'
    connection.query(sql)
    const sql2 = 'SELECT name FROM people order by id;'
    var results = ""
    connection.query(sql2, function (err, result, fields) {
        console.log(results)
        var html = '<div align=center><h1>Full Cycle Rocks!</h1></div><br><br>'
        if (err) throw err;
        Object.keys(result).forEach(function(key) {
          var row = result[key];
          if (results != "") { results = results + ", <strong>" + row.name + "</strong>"} else { results = "<strong>" + row.name + "</strong>" }
        });
        html = html + '<div align=center><h3>' + results + '</h3></div>'
        res.send(html)

    });

    connection.end()

    
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})