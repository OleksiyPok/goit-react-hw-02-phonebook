// import PropTypes from 'prop-types';

import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  function handleInput({ target }) {
    console.log(target.value);
    // [target.name]=target.value
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="personName">Name</Label>
      <Input
        type="text"
        name="personName"
        id="personName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleInput}
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleInput}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

// ContactForm.propTypes = {};
