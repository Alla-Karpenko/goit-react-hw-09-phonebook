import { createSelector } from '@reduxjs/toolkit';
const getContacts = state => state.contacts.items;
 
const getFilter = state => state.contacts.filter;

const getvisibleContacts = createSelector(
    [ getContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter((contact) =>
           contact.name.toLowerCase().includes(normalizedFilter)
        );
    },
)
export default {
  getContacts,
  getFilter,
  getvisibleContacts,
};