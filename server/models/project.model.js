const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Debe ingresar el nombre del Proyecto'],
        maxlength: [30, 'Su largo no debe ser mayor a 30']
    },
    date: { 
        type: Date,
        required: [true, 'Debe ingresar la fecha del Proyecto'],
        format: 'YYYY-MM-DD',
    },
}, { timestamps: true });


module.exports.Project = mongoose.model('Project', ProjectSchema);