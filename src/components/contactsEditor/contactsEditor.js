import React from 'react';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filters';

import './contactsEditor.scss';

export default function ContactsEditor() {
 
    return (
        <div className="Phonebook">
         <h1 className="Phonebook-title">Phonebook</h1>
         <ContactForm />
         <h2>Contacts</h2>

         <Filter />

         <ContactList />
        </div>
    );   
}
 





