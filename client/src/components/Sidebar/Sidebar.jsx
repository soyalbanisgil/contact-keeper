import React, { useContext } from 'react';
import './Sidebar.sass';
import AuthContext from '../../Context/Auth/authContext';
import ContactContext from '../../Context/Contact/contactContext';

export const Sidebar = (props) => {

    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);

    const { logoutUser } = authContext;
    const { clearContacts } = contactContext;

    const { setModalIsOpen } = props;

    const handleClick = () => {
        logoutUser();
        clearContacts();
    };

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

            <button onClick={handleClick} className='btn btn-primary'>Logout</button>
        </nav>
    );
};
