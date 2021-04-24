import React, { useContext, useRef, useEffect } from 'react';
import contactContext from '../../Context/Contact/contactContext';
import './Contacts.sass';

export const ContactFilter = () => {

    const ContactContext = useContext(contactContext);
    const text = useRef('');

    useEffect(() => {
        if (ContactContext.filtered == null) {
            text.current.value = '';
        }
    });


    const handleChange = e => {
        if (text.current.value !== '') {
            ContactContext.filterContacts(e.target.value);
        } else {
            ContactContext.clearFilter();
        }
    };

    return (
        <form id='search' onSubmit={e => e.preventDefault()}>
            <input ref={text} type="text" placeholder='Filter Contacts...' onChange={handleChange} />
        </form >
    );
};
