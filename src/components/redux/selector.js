import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectErrors = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectorContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(filterValue) || contact.numer.toLowerCase().includes(filterValue))
  }
);