import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../pages/Contact.module.css';
import { ScaleLoader } from 'react-spinners';
import { state, dispatch } from './contactReducer';

const ContactForm = ({ setError }) => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [text, settext] = useState('');
  const [nameTouched, setnameTouched] = useState(false);
  const [emailTouched, setemailTouched] = useState(false);
  const [textTouched, settextTouched] = useState(false);
  const [isSending, setisSending] = useState(false);
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const nameIsValid = name.length >= 3;
  const emailIsValid = isEmail(email);
  const textIsValid = text.length > 0;

  const formValid = nameIsValid && emailIsValid && textIsValid;
  const nameError = !nameIsValid && nameTouched;
  const emailError = !emailIsValid && emailTouched;
  const textError = !textIsValid && textTouched;

  async function sendMessage(message) {
    setisSending(true);
    try {
      const res = await fetch(
        'https://opg-373814-default-rtdb.firebaseio.com/messages.json',
        {
          method: 'POST',
          body: JSON.stringify(message),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(res);
      if (!res.ok) {
        setError('Sending message failed!');
      }
      const data = await res.json();
      navigate('/home', { state: 'Thank you for your message.' });
    } catch (err) {
      setError(err);
    }
    setisSending(false);
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const message = {
      name,
      email,
      msg: text,
    };

    if (formValid) {
      console.log(name, email, text);
      sendMessage(message);
      setname('');
      setemail('');
      settext('');
      setnameTouched(false);
      setemailTouched(false);
      settextTouched(false);
    } else {
      setnameTouched(true);
      setemailTouched(true);
      settextTouched(true);
    }
  }

  return (
    <div className={classes.formsContainer}>
      {isSending && (
        <ScaleLoader color='white' className={classes.formLoader} />
      )}
      {!isSending && (
        <form>
          <div className={classes.formContainer}>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              minLength={3}
              value={name}
              placeholder='Your name'
              onChange={(e) => {
                setname(e.target.value);
              }}
              onBlur={() => {
                setnameTouched(true);
              }}
            ></input>
            {nameError && (
              <small className={classes.errorMsg}>Enter your name.</small>
            )}
          </div>
          <div className={classes.formContainer}>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              placeholder='Your email'
              type='email'
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              onBlur={() => {
                setemailTouched(true);
              }}
            ></input>
            {emailError && (
              <small className={classes.errorMsg}>Enter your email.</small>
            )}
          </div>

          <div className={classes.formContainer}>
            <label htmlFor='text'>Message</label>
            <textarea
              value={text}
              id='textarea'
              placeholder='Write your message for us.'
              onChange={(e) => {
                settext(e.target.value);
              }}
              onBlur={() => {
                settextTouched(true);
              }}
            ></textarea>
            {textError && (
              <small className={classes.errorMsg}>
                Enter your message that you want to send.
              </small>
            )}
          </div>

          <button onClick={handleSubmit}>Send Message</button>
        </form>
      )}
    </div>
  );
};
export default ContactForm;
