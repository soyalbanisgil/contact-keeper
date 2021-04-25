import React, { useState, useContext, useEffect } from 'react';
import './Register.sass';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

export const Register = () => {

    const history = useHistory();

    const authContext = useContext(AuthContext);

    const { registerUser, error, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            history.push('/');
        }

        if (error === 'User already exists') {
            alert(error);
        }
    }, [error, isAuthenticated, history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        registerUser({
            name, email, password
        });
    };

    const { name, email, password, password2 } = user;
    return (
        <div id="register">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <form onSubmit={handleSubmit} className='p-5 animate__animated animate__backInLeft animate_delay-2s'>
                            <h2 className='text-center'>Create Account</h2>
                            <p>Fil the form to complete the registration</p>
                            <div className="form-group py-2">
                                <label>Name</label>
                                <input onChange={handleChange} type="text" className="form-control" name='name' placeholder="Enter name" value={name} required />
                            </div>
                            <div className="form-group py-2">
                                <label>Email</label>
                                <input onChange={handleChange} type="email" className="form-control" name='email' placeholder="youremail@email.com" value={email} required />
                            </div>
                            <div className="form-group py-2">
                                <label>Password</label>
                                <input onChange={handleChange} type="password" className="form-control" name='password' placeholder="Enter 7 characters or more" value={password} required />
                            </div>
                            <div className="form-group py-2">
                                <label>Confirm Password</label>
                                <input onChange={handleChange} type="password" className="form-control" name='password2' placeholder="Type password again" value={password2} required />
                            </div>
                            <p>Already have an account? <Link to="/login">Login</Link> </p>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
