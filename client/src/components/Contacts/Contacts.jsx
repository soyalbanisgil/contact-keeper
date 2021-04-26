import React, { useContext, useEffect } from 'react';
import './Contacts.sass';

import contactContext from '../../Context/Contact/contactContext';
import { ContactItem } from '../ContactItem/ContactItem';

export const Contacts = (props) => {

    const { setModalIsOpen } = props;

    const ContactContext = useContext(contactContext);

    const { contacts, filtered, getContacts } = ContactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, []);

    if (contacts.length === 0) {
        return <h4>Please add a contact</h4>;
    }

    return (
        <div className="row">
            {filtered !== null ? filtered.map(contact => (
                <div key={contact._id} className="col-3">
                    <ContactItem contact={contact} setModalIsOpen={setModalIsOpen} />
                </div>
            )) :
                contacts.map(contact => (
                    <div key={contact._id} className="col-3">
                        <ContactItem contact={contact} setModalIsOpen={setModalIsOpen} />
                    </div>
                ))
            }

        </div>
    );
};
