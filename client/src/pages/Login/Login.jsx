import React, { useState, useContext, useEffect } from 'react';
import './Login.sass';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

export const Login = () => {

    const history = useHistory();

    const authContext = useContext(AuthContext);

    const { loginUser, error, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error === 'Invalid Credentials') {
            alert(error);
        }
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        loginUser({
            email,
            password
        });
    };

    const { email, password } = user;

    return (
        <div id="login">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <form onSubmit={handleSubmit} className='p-5 animate__animated animate__backInLeft animate_delay-2s'>
                            <h2 className='text-center'>Sign In</h2>
                            <p>Welcome! Please fill lthe form to access to your account.</p>
                            <div className="form-group py-2">
                                <label>Email</label>
                                <input onChange={handleChange} type="email" className="form-control" name='email' placeholder="youremail@email.com" value={email} required />
                            </div>
                            <div className="form-group py-2">
                                <label>Password</label>
                                <input onChange={handleChange} type="password" className="form-control" name='password' placeholder="Enter 7 characters or more" value={password} required />
                            </div>
                            <p className='mt-3'>Already have an account? <Link to={"/register"}>Register</Link> </p>
                            <button type="submit" className="mt-4 btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
