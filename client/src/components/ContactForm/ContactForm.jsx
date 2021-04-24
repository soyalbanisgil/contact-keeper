import React, { useContext, useState, useEffect } from 'react';
import contactContext from '../../Context/Contact/contactContext';

export const ContactForm = () => {

    const ContactContext = useContext(contactContext);

    const { addContact, current, updateContact, clearCurrent } = ContactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [ContactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (

        <form onSubmit={handleSubmit} className='p-5'>
            <h2 className='text-center'>{current !== null ? 'Update Contact' : 'Add Contact'}</h2>
            <div className="form-group py-2">
                <label>Name</label>
                <input type="text" className="form-control" name='name' placeholder="Enter name" value={name} onChange={handleChange} />
            </div>
            <div className="form-group py-2">
                <label>Email</label>
                <input type="email" className="form-control" name='email' placeholder="email@email.com" value={email} onChange={handleChange} />
            </div>
            <div className="form-group py-2">
                <label>Phone</label>
                <input type="text" className="form-control" name='phone' placeholder="Phone Number" value={phone} onChange={handleChange} />
            </div>
            <input onChange={handleChange} className="form-check-input py-2" type="radio" name="type" value='personal' checked={type === 'personal'} />Personal{' '}
            <input onChange={handleChange} className="form-check-input" type="radio" name="type" value='professional' checked={type === 'professional'} />Professional
            <button type="submit" className="mt-5 btn btn-primary">{current !== null ? 'Update Contact' : 'Add Contact'}</button>
            {current &&
                <button onClick={clearAll} className="mt-5 btn btn-primary">Clear</button>
            }
        </form>
    );
};
