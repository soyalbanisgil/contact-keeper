import React, { useContext } from 'react';
import contactContext from '../../Context/Contact/contactContext';
import './ContactItem.sass';

export const ContactItem = ({ contact, setModalIsOpen }) => {

  const ContactContext = useContext(contactContext);

  const { deleteContact, setCurrent, clearCurrent } = ContactContext;

  console.log(contact);

  const onDelete = () => {
    deleteContact(contact._id);
    clearCurrent();
  };

  const currentContact = () => {
    setModalIsOpen(true);
    setCurrent(contact);
  };

  return (
    <div className='contact-card text-center animate__animated animate__zoomIn'>
      <h4 className='contact-name'>{contact.name}</h4>
      <span className={'badge ' + (contact.type === 'personal' ? 'badge-success' : 'badge-primary')}>{contact.type}</span>
      <p className='contact-email'>{contact.email}</p>
      <p className='contact-phone'>{contact.phone}</p>
      <div className='buttons'>
        <button onClick={currentContact} className='btn btn-secondary btn-sm'>Edit</button>
        <button onClick={onDelete} className='btn btn-primary btn-sm'>Delete</button>
      </div>
    </div>
  );
};
