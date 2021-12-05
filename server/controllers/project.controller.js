const { Project } = require('../models/project.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Product Manager"
    });
}
// Método para crear un Proyecto
module.exports.createProject = (request, response) => {
    const { title, date } = request.body;
    Project.create({
        title,
        date,
    })
        .then(project => response.json(project))
        .catch(err => response.json(err));
}
// Método para obtener todos los Proyecto
module.exports.getAllProject = (request, response) => {
    Project.find({})
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}
// Método para obtener un Proyecto
module.exports.getProject = (request, response) => {
    Project.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))  
}

// Método para actualizar un Proyecto
module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.json(err))
}

// Método para eliminar un Proyecto
module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}