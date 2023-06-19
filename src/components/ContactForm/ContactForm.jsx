import React, { useState,} from "react";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {  addContact } from '../redux/operations';
import { selectContacts } from '../redux/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [numer, setNumber] = useState('');

  const contacts = useSelector(selectContacts);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isNameExist = contacts.find(
      (contact) => typeof contact.name === 'string' && contact.name.toLowerCase() === name.toLowerCase()
    );
  
    if (isNameExist) {
      alert(`${name} already exists in contacts`);
    } else {
      dispatch(addContact({ name, numer }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="number"
        value={numer}
        onChange={handleNumberChange}
        placeholder="Phone number"
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
        Add to contacts
      </button>
    </form>
  );
}

export default ContactForm;
