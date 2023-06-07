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
  };

  handleCreatePerson = person => {
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

  handleFilterPerson = e => {
    this.setState.filter = e.target.value;
    const filteredPersons = this.state.contacts.filter(person =>
      person.name.includes(e.target.value)
    );

    console.log(filteredPersons);
  };

  // handleDeletePerson = person => {
  //   console.log('person:', person);
  // };

  // getPerson = person => {
  //   console.log('person:', person);
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm
            handleCreatePerson={this.handleCreatePerson}
            // dataOperation={
            //   (this.handleCreatePerson, this.deletePerson, this.getPersonData)
            // }
          ></ContactForm>
        </Section>
        <Section title="Contacts">
          <FilterForm handleFilterPerson={this.handleFilterPerson}></FilterForm>
          <ContactList contacts={this.state.contacts}></ContactList>
        </Section>
      </div>
    );
  }
}
