// import PropTypes from 'prop-types';

import { Ul, Li } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  console.log('contacts:', contacts);
  return (
    <Ul>
      {contacts.map(person => (
        <Li key={person.id}>
          <span>{person.name}:</span>
          <span>{person.number}</span>
          <button>Delete</button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactList;

// ContactList.propTypes = {};
