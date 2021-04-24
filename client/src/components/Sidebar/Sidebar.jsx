import React from 'react';
import './Sidebar.sass';

export const Sidebar = (props) => {

    const { setModalIsOpen } = props;

    return (
        <nav id="sidebar" className='text-center py-5'>
            <div className="sidebar-header">
                <h3><i className="fas fa-user"></i>Contact Keeper</h3>
            </div>

            <button onClick={() => setModalIsOpen(true)} className='btn btn-secondary'>Add new contact</button>

            <ul className="list-unstyled components">
                <li>
                    <a href="/"><i className="fas fa-home"></i>All Contacts</a>
                </li>
                <li>
                    <a href="/"><i className="fas fa-clipboard"></i>Personal</a>
                </li>
                <li>
                    <a href="/"><i className="fas fa-user-cog"></i>Professional</a>
                </li>
            </ul>

            <button className='btn btn-primary'>Logout</button>
        </nav>
    );
};
