import { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterForm from './FilterForm';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', personName: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', personName: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', personName: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', personName: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    personName: '',
    number: '',
  };

  // createPerson = person => {
  //   console.log('person:', person);
  // };

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
