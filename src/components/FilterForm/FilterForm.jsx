import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Container, Label, Input } from './FilterForm.styled';

class FilterForm extends Component {
  render() {
    return (
      <Container>
        <Label>Find contacts by name</Label>
        <Input
          type="text"
          name="personName"
          id="personName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Container>
    );
  }
}

export default FilterForm;
