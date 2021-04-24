import React, { useContext } from 'react';
import './Contacts.sass';

import contactContext from '../../Context/Contact/contactContext';
import { ContactItem } from '../ContactItem/ContactItem';

export const Contacts = (props) => {

    const { setModalIsOpen } = props;

    const ContactContext = useContext(contactContext);

    const { contacts } = ContactContext;

    return (
        <div className="row">
            {contacts.map(contact => (
                <div key={contact.id} className="col-3">
                    <ContactItem contact={contact} setModalIsOpen={setModalIsOpen} />
                </div>
            ))}
        </div>
    );
};
