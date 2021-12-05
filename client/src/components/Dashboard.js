import React, {useState } from "react";
import '../App.css';
import { Container, Row, Col, Button  } from 'reactstrap';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import RegisterForm from '../register/RegisterForm';
import LoginForm from '../login/LoginForm';

const Home = () => {

  const adminUser = {
    name: '',
    email: '',
    password: ''
  }

  const newRegister = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  
  const [user, setUser] = useState({name: "", email: ""});
  const [register, setRegister] = useState(newRegister);
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

  if(details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Login Successful");
      setUser({
        name: details.name,
        email: details.email
      });
  } else {
    console.log("Data not matched");
    setError("Data not matched");
  }
}
const Register = details => {
  console.log(details);

  if(details.email == newRegister.email && details.password == newRegister.password) {
    console.log("Login Successful");
    setRegister({
      name: details.name,
      email: details.email
    });
} else {
  console.log("Data not matched");
  setError("Data not matched");
}
}

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <Container className="estiloso">
        <Row >
        <h1 className="space">Project Manager</h1>
            <Col md={6}>
                <RegisterForm Register={Register} error={error} />
            </Col>
            <Col md={6}>
                <LoginForm Login={Login} error={error} />
            </Col>
        </Row>
        <Button className="space" variant="success" style={{ margin: '10px' }}><Link to='/DashboardPanel' style={{ color: '#FFF' }}><AiFillHome /> Go Dashboard Panel</Link></Button>
        <hr></hr>
    </Container>
  );
};

export default Home;

