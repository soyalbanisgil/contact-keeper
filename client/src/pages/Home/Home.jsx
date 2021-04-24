import React, { useState } from 'react';
import { Contacts } from '../../components/Contacts/Contacts';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import './Home.sass';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export const Home = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="wrapper fixed-left">
            <Sidebar setModalIsOpen={setModalIsOpen} />
            <div id="content">
                <div className="container">
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
