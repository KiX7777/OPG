import ContactForm from '../Components/ContactForm'
import classes from './Contact.module.css'
import { useState } from 'react'

const Contact = () => {
  const [error, setError] = useState('')

  return (
    <div className={classes.contactContainer}>
      {error && <h1 className={classes.submitError}>Something went wrong</h1>}
      <h1>Kontaktirajte nas</h1>
      <ContactForm setError={setError} />
    </div>
  )
}

export default Contact
