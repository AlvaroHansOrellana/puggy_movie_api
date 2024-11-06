const express = require('express') // Importa la libreria  (paquete)
const app = express() // Inicializar el servidor con express, variable app representa el servidor
const port = 3000 // Puerto a usar

// importar middlewares

const manage404 = require("./middlewares/manage404");
const morgan = require("./middlewares/morgan");

app.use(morgan(':method :url :status - :response-time ms :body')); // script que activa morgan y su respuestas por terminal
app.use(express.json());   // ! AL INICIO DE LA HOJA, configuracion de express para que pueda recibir JSON
app.use(express.static('public'))

//Motor de plantillas  PUG
app.set('view engine', 'pug');
app.set('views','./views');

// GET http://localhost:3000
app.get('/', (req, res) => {
  res.send('Hello 06 WEB PUG!')
});

// Rutas
const paginaWebRoutes = require("./routes/pagina.web.routes")
app.use('/', paginaWebRoutes);


  // ! Para ruta no existente ...
app.use("*", manage404); // Usar este cuando haya un middleware activado


// !     Para "llamar" al puerto, siempre necesario
app.listen(port, () => {
    console.log(`Example app listenig on http://localhost:${port}`)
});