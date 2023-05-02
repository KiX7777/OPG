import ContactForm from '../Components/ContactForm';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={classes.contactContainer}>
      <h1>Kontaktirajte nas</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
