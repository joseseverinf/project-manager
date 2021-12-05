import React, { useState } from 'react';
import './Style.css';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: '', password: ''});

    const submitHandler = (e) => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <input type="submit" value="Login" />
                </div>    
            </form>
        </div>
    );
}
export default LoginForm;