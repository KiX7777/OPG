import ContactForm from '../Components/ContactForm'
import classes from './Contact.module.css'
import { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

const Contact = (props) => {
  const href = useRef(null)
  const [error, setError] = useState('')
  useEffect(() => {
    props.setIsHome()
  }, [])

  return (
    <CSSTransition
      timeout={1400}
      in={true}
      appear={true}
      nodeRef={href}
      classNames={{
        appear: 'Appear',
        appearActive: 'AppearActive',
        appearDone: 'AppearActive',
      }}
    >
      <div ref={href} className={classes.contactContainer}>
        {error && (
          <h1 className={classes.submitError}>Nešto je pošlo po zlu</h1>
        )}
        <div className={classes.contactInfo}>
          <h1>Kontaktirajte nas</h1>
          <h1>Tel: 091/885-9296</h1>
        </div>
        <ContactForm setError={setError} />
      </div>
    </CSSTransition>
  )
}

export default Contact
