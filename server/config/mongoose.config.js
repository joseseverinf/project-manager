const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/projects", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.log("Algo ha ocurrido y no se puede conectar a la DB", err));
