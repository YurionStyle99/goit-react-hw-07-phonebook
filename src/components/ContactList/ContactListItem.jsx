import PropTypes from 'prop-types';
import React from 'react';

export const ContactItem = ({ id, name, numer, onDeleteContact }) => {
  return (
    <li key={id}>
      {name}: {numer}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  numer: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};