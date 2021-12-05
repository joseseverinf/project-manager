import React, { useState, useEffect } from 'react';
import '../App.css';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';


const CompleteList = props => {

  const [ title, setTitle ] = useState('');
  const [ date, setDate] = useState('');

// Función para eliminar un proyecto
const eliminar = id => {
  if(id) {
      Swal.fire({
          title:'Eliminar el contacto',
          text: '¿Esta seguro que desea eliminar el contacto',
          icon:'question',
          showCancelButton: true,
          confirmButtonText: 'Si, eliminar!!!',
          cancelButtonText: 'No'
      }).then(resp => {
          if(resp.isConfirmed){
              axios.delete(`/api/projects/${id}`)
              .then(resp => {
                  const project = [...project];
                  project.splice(project.findIndex(e => e._id === id), 1);
              }).catch(error => Swal.fire('Error al eliminar el contacto', error?.message, 'error'));
          }
      })
  }
}
  return (
    <div className="DivWithScroll">
    {props.project && props.project.map((project, index)=>{
        return (
          <Card key={index}>
            <CardBody>
              <CardTitle onChange={e => setTitle({...project, title: e.target.value})} value={project.title}></CardTitle>
              <CardSubtitle onChange={e => setDate({...project, date: e.target.value})} value={project.date}></CardSubtitle>
              {props.project && <Button className="ml2" color="danger" type="submit" onClick={e => eliminar(e, project._id)}>Eliminar</Button>}
            </CardBody>
          </Card>

        )
    })}
  </div>
  )
}

export default CompleteList;            