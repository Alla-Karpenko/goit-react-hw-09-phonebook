import React, {useState} from 'react';
import './ContactForm.scss';
import { contactOperations, contactsSelectors } from "../../redux/contact";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  useEffect((name,number) => {
    dispatch(contactOperations.fetchContacts(name, number))
  }, [dispatch]);


  const handleSubmitForm = e => {
    e.preventDefault();
  
    if (!name) {
      return;
    }
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(contactOperations.addContacts(name, number));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.warn(`Тип поля $(name) не обрабатывается`);;
    };
  };

 
    return (
      <form className="Form" onSubmit={handleSubmitForm}>
        <label className="Label">
          Name{" "}
          <input
            className="Input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            placeholder="name"
          />
        </label>
        <label>
          Number{" "}
          <input
            className="Input"
            type="tel"
            name="number"
            placeholder="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button className="Button" type="submit">
          Add contact
        </button>
      </form>
    );
};
