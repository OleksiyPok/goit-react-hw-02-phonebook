import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Ul, Li, Button } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const handleDeletePerson = this.props.handleDeletePerson;
    return (
      <Ul>
        {contacts.map(person => (
          <Li key={person.id}>
            <span>{person.name}:</span>
            <span>{person.number}</span>
            <Button onClick={() => handleDeletePerson(person.id)}>
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    );
  }
}

export default ContactList;

// ContactList.propTypes = {};
