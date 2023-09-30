const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sasa',
  database: 'historia_guerras',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión a la base de datos MySQL exitosa');
  }
});

// Ruta para obtener todas las guerras
app.get('/guerras', (req, res) => {
  connection.query('SELECT * FROM guerras', (error, results) => {
    if (error) {
      console.error('Error al consultar guerras:', error);
      res.status(500).json({ error: 'Error al consultar guerras' });
    } else {
      res.json(results);
    }
  });
});

// Otras rutas CRUD aquí...

app.listen(port, () => {
  console.log(`Backend escuchando en el puerto ${port}`);
});
