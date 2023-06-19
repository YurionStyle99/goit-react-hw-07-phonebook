
import { selectorContacts } from 'components/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const dispatch = useDispatch();


  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id))
      .catch((error) => console.error(error));
  };

  return (
    <ul>
      {contacts.map(({ id, name, numer }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          numer={numer}
          onDeleteContact={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
