import React, { useContext, useEffect, useState } from 'react';
import { Contacts } from '../../components/Contacts/Contacts';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import './Home.sass';
import AuthContext from '../../Context/Auth/authContext';

import Modal from 'react-modal';
import { ContactFilter } from '../../components/Contacts/ContactFilter';

Modal.setAppElement('#root');

export const Home = () => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, []);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="wrapper fixed-left">
            <Sidebar setModalIsOpen={setModalIsOpen} />
            <div id="content">
                <div className="container">
                    <ContactFilter />
                    <Contacts setModalIsOpen={setModalIsOpen} />
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{
                overlay: {
                    background: 'rgba(0,0,0,0.5)'
                }
            }}>
                <ContactForm />
            </Modal>
        </div>
    );
};
