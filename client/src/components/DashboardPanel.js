import React, {useEffect, useState} from "react";
import '../App.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { IoAddCircleOutline } from 'react-icons/io5';
import { AiFillHome } from 'react-icons/ai';
import ProjectList from './ProjectList';
import ProgressList from './ProgressList';
import CompleteList from "./CompleteList";
import axios from "axios";

const DashboardPanel = () => {

    const [project, setProject] = useState([]);
    const [ title, setTitle ] = useState('');
    const [ date, setDate] = useState('');
   useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
          .then(res => setProject(res.data))
        .catch(err => console.log("Error:", err));
}, []);

  return (
      
    <Container className="estiloso">
        <Row >
        <h1 className="space">Project Manager</h1>

            <Col md={4}>
                <h3 className="backlog">Backlog</h3>
                <ProjectList project={project}/>
            </Col>
            <Col md={4}>
                <h3 className="inprogress" >In Progress</h3>
                <ProgressList title={title} date={date}/>
            </Col>
            <Col md={4}>
                <h3 className="completed">Completed</h3>
                <ProgressList title={title} date={date}/>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={6} lg={6}>
                <Button className="space" variant="primary" style={{ margin: '10px' }}><Link to='/NewProject' style={{ color: '#FFF' }}><IoAddCircleOutline /> Add New Project</Link></Button>
            </Col>
            <Col xs={6} md={6} lg={6}>
                <Button className="space" variant="success" style={{ margin: '10px' }}><Link to='/' style={{ color: '#FFF' }}><AiFillHome /> Go Home</Link></Button>
            </Col>
        </Row>
        <hr></hr>
    </Container>
  );
};


export default DashboardPanel;
