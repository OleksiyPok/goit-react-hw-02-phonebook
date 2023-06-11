// import { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Label, Input } from './FilterForm.styled';

// class FilterForm extends Component {
const FilterForm = ({ setFilter }) => {
  // render() {
  return (
    <Container>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="personName"
        id="personName"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        autocomplete="off"
        // onChange={this.props.setFilter}
        onChange={setFilter}
        required
      />
    </Container>
  );
};
// }

export default FilterForm;

FilterForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
