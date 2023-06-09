import { Component } from 'react';
import PropTypes from 'prop-types';

import { Ul, Li, Span, Button } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const deletePerson = this.props.deletePerson;
    return (
      <Ul>
        {contacts.map(person => (
          <Li key={person.id}>
            <Span>{person.name}:</Span>
            <Span>{person.number}</Span>
            <Button onClick={() => deletePerson(person.id)}>Delete</Button>
          </Li>
        ))}
      </Ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  deletePerson: PropTypes.func.isRequired,
};
