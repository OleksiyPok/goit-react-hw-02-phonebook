// import PropTypes from 'prop-types';

import { Container, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  return (
    <Container>
      <Label htmlFor="personName">Name</Label>
      <Input
        type="text"
        name="personName"
        id="personName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button>Add contact</Button>
    </Container>
  );
};

export default ContactForm;

// ContactForm.propTypes = {};
