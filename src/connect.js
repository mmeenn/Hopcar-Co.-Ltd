import express from 'express';
import mysql from 'mysql'

const app = express();
const PORT = 8000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'car-database'
});

conn.connect();

app.get('/car', (req, res) => {
  const sql = 'SELECT * FROM car';
  const getDb = conn.query(sql, (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
  return getDb
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

