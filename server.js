const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// servidor basico con express
const app = express();

// connect Database
connectDB();

// Iniciar Middlewares
app.use(express.json({ extended: false }));

/* enpoint
app.get('/', (req, res) =>
  res.json({ message: 'Welcome to the contact keeper API' })
);
*/

// server static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// define las rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// el puerto donde se ejecuta
const PORT = process.env.PORT || 5000;
// ejecucion del servidor
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Este archivo se ejecuta de manera automatica cuando lo ejecutas con el script creado que llama el comando nodemon server.js
