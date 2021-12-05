import React, { useState, useEffect } from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AiFillDelete } from 'react-icons/ai';

const ProjectList = props => {

  const [ title, setTitle ] = useState('');
  const [ date, setDate] = useState('');

//Función para agregar un proyecto
const onSubmitHandler = e => {
  e.preventDefault();
  axios.post('http://localhost:8000/api/projects/', {
    title, date
  })
  .then(resp => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Proyecto agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    props.project.push('/projects/' + resp.data.data);
  }
  )
  .catch(err => {
      console.log(err);

  })
}

// Función para eliminar un proyecto
const eliminar = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!'
  }).then((result) => {
    if (result.value) {
      axios.delete('http://localhost:8000/api/projects/' + props.title + props.date)
      .then(resp => {
        Swal.fire(
          'Eliminado!',
          'Tu proyecto ha sido eliminado.',
          'success'
        )
        props.project.push('/projects/');
      })
      .catch(err => {
        console.log(err);
      })
    }
  })
}

return (
    <div className="DivWithScroll">
    {props.project && props.project.map((project, index)=>{
        return (
          <Card key={index}>
            <CardBody>
              <CardTitle>{project.title}</CardTitle>
              <CardSubtitle>{project.date}</CardSubtitle>
              {props.project && <Button color="primary" type="submit" onClick={e => onSubmitHandler(e, project._id)}>Start Project</Button>}
              <Button color="danger" type="button" onClick={e => eliminar((e) => project._id)}><AiFillDelete /></Button>
            </CardBody>
          </Card>

        )
    })}
  </div>
  )
}

export default ProjectList;            