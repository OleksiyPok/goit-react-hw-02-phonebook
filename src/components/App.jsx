import { Component } from 'react';
// import PropTypes from 'prop-types';
import { nanoid, customAlphabet } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterForm from './FilterForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  createPerson = person => {
    const nanoid = customAlphabet('1234567890ABCDEF', 24);

    const newContact = {
      id: nanoid(),
      name: person.name,
      number: person.number,
    };

    this.setState({
      contacts: [...this.state.contacts, { ...newContact }],
    });
  };

  // printState() {
  //   console.log('this.state.contacts:', this.state.contacts);
  // }

  // deletePerson = person => {
  //   console.log('person:', person);
  // };

  // getPersonData = person => {
  //   console.log('person:', person);
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm
            createPerson={this.createPerson}
            // dataOperation={
            //   (this.createPerson, this.deletePerson, this.getPersonData)
            // }
          ></ContactForm>
        </Section>
        <Section title="Contacts">
          <FilterForm></FilterForm>
          <ContactList contacts={this.state.contacts}></ContactList>
        </Section>
      </div>
    );
  }
}
