import { Component } from 'react';

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

  createPerson = person => {
    const nanoid = customAlphabet('1234567890ABCDEF', 24);

    const newContact = {
      id: nanoid(),
      name: person.name,
      number: person.number,
    };

    if (
      this.state.contacts.some(
        person => person.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState({
        contacts: [...this.state.contacts, { ...newContact }],
      });
    }
  };

  deletePerson = personId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== personId),
    }));
  };

  setFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredPersons = () => {
    const filter = this.state.filter.toLowerCase();
    const allPersons = this.state.contacts;
    const filteredPersons = allPersons.filter(person =>
      person.name.toLowerCase().includes(filter)
    );
    return filteredPersons;
  };

  render() {
    const filteredPersons = this.getFilteredPersons();
    return (
      <div>
        <h1>Phonebook</h1>
        <Section>
          <ContactForm createPerson={this.createPerson}></ContactForm>
        </Section>
        <Section title="Contacts">
          <FilterForm setFilter={this.setFilter}></FilterForm>
          <ContactList
            contacts={filteredPersons}
            deletePerson={this.deletePerson}
          ></ContactList>
        </Section>
      </div>
    );
  }
}
