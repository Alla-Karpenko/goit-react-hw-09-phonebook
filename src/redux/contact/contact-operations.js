import axios from 'axios';
import {
  addContactsError,
  addContactsRequest,
  addContactsSuccess,
  deleteContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contact-actions';

const fetchContacts = (name, number) => async dispatch => {
  const contacts = { name, number };
  
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts', contacts);

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};


const addContacts = (name, number) => async dispatch => {
  const contacts = { name, number };

  dispatch(addContactsRequest());
  try {
    const { data } = await axios.post("/contacts", contacts);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.message)); 
  }
};

const deleteContact = contactsId => dispatch => {
    dispatch(deleteContactsRequest());

    axios
      .delete(`/contacts/${contactsId}`)
      .then(() => dispatch(deleteContactsSuccess(contactsId)))
      .catch((error) => deleteContactsError(error.message));
}

export default {
  addContacts,
  deleteContact,
  fetchContacts,
}; 