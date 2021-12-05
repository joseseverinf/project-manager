import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AiOutlineSchedule } from 'react-icons/ai';
import Swal from 'sweetalert2';


const NewProject = props => {
    const [ title, setTitle ] = useState('');
    const [ date, setDate] = useState('');
   
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/projects/',{
            title,
            date
        })
        .then(resp => {
            if(resp.data.ok) {
                Swal.fire('Favor completar con datos requeridos', resp.data.message, 'error');
            } else {
                Swal.fire('Registro de Tarea correctamente', resp.data.message, 'success');
            }
        })
        .catch(err => {
            console.log(err);

        })
}

    return (
        <Container className="space estiloso">
            <Row>
                <Col md={12}>
                    <h1 className="space">Project Manager</h1>
                </Col>
                <Col lg={6}>
                    <h3>Plan a new Project</h3>
                </Col>
                <Col lg={6}>
                    <Button variant="success" style={{ marginLeft: '10px' }}><Link to='/DashboardPanel' style={{ color: '#FFF' }}>Back to Dashboard</Link></Button>
                </Col>
                <Form onSubmit={onSubmitHandler}>
                    <FormGroup>
                        <Label>Título:</Label>
                        <Input type="text" onChange={e => setTitle(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Date:</Label>
                        <Input type="date" onChange={e => setDate(e.target.value)} />
                    </FormGroup>
                    <Button variant="primary" type="submit" ><AiOutlineSchedule/> Create Project</Button>
                </Form>
            </Row>
        </Container>
    )
}
export default NewProject;