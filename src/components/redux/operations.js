import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64899f075fa58521caaff052.mockapi.io'; 

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get('/contacts/contacts'); 
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  try {
    const response = await axios.post('/contacts/contacts', contact); 
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await axios.delete(`/contacts/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    throw new Error(error.message);
  }
});
