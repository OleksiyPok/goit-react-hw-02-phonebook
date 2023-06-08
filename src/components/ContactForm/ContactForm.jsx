import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.handleCreatePerson(this.state);

    this.props.handleCreatePerson({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleInput}
          value={this.state.name}
          required
        />
        <Label htmlFor="number">Number</Label>
        <Input
          type="tel"
          name="number"
          id="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="+ ...."
          onChange={this.handleInput}
          value={this.state.number}
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

// ContactForm.propTypes = {};
