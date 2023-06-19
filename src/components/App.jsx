
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from './redux/operations';
import styles from './styles.module.css';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Name</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};

export default App;