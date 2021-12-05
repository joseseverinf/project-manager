import React, { useState } from 'react';
import '../login/Style.css';

function RegisterForm({Register}) {
    const [detail, setDetail] = useState({name: '', email: '', password: ''});

    const submitHandler = (e) => {
        e.preventDefault();
        Register(detail);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetail({...detail, name: e.target.value})} value={detail.name} require />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e => setDetail({...detail, email: e.target.value})} value={detail.email} require />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e => setDetail({...detail, password: e.target.value})} value={detail.password} require/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password:</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <input type="submit" value="Register" />
                </div>    
            </form>
        </div>
    );
}
export default RegisterForm;