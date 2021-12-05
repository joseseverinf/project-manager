const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

require('./config/mongoose.config'); //Esta linea llama la configuración de mongoose

app.use(cors()); //Esta linea permite que se pueda acceder a la api desde cualquier lugar

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./routes/project.route')(app); //Esta linea llama al archivo de rutas

app.listen(8000, () => {//Esta linea permite que el servidor escuche en el puerto 8000
    console.log("Iniciado en el puerto:", port);
})
