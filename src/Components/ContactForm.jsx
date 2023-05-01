import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [text, settext] = useState('');
  const [nameTouched, setnameTouched] = useState(false);
  const [emailTouched, setemailTouched] = useState(false);
  const [textTouched, settextTouched] = useState(false);
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const nameIsValid = name.length >= 3;
  const emailIsValid = isEmail(email);
  const textIsValid = text.length > 0;

  const formValid = nameIsValid && emailIsValid && textIsValid;

  const nameError = !nameIsValid && nameTouched;
  const emailError = !emailIsValid && emailTouched;
  const textError = !textIsValid && textTouched;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (formValid) {
      console.log(name, email, text);
      setname('');
      setemail('');
      settext('');

      navigate('/home', { state: 'Thank you for your message.' });
    } else {
      setnameTouched(true);
      setemailTouched(true);
      settextTouched(true);
    }
  }

  return (
    <form>
      <div className='formContainer'>
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
        {nameError && <small className='errorMsg'>Enter your name.</small>}
      </div>
      <div className='formContainer'>
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
        {emailError && <small className='errorMsg'>Enter your email.</small>}
      </div>

      <div className='formContainer'>
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
          <small className='errorMsg'>
            Enter your message that you want to send.
          </small>
        )}
      </div>

      <button onClick={handleSubmit}>Send Message</button>
    </form>
  );
};
export default ContactForm;
