import { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from '../pages/Contact.module.css'
import { ScaleLoader } from 'react-spinners'
import { initialState, reducer } from './contactReducer'

const ContactForm = ({ setError }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

  const nameIsValid = state.name.length >= 3
  const emailIsValid = isEmail(state.email)
  const textIsValid = state.text.length > 0
  const formValid = nameIsValid && emailIsValid && textIsValid

  const nameError = !nameIsValid && state.nameTouched
  const emailError = !emailIsValid && state.emailTouched
  const textError = !textIsValid && state.textTouched

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  async function sendMessage(message) {
    dispatch({
      type: 'sendingRequest',
    })
    // try {
    //   const res = await fetch(
    //     'https://opg-373814-default-rtdb.firebaseio.com/messages.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify(message),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   )
    //   if (!res.ok) {
    //     throw new Error('Sending message failed!')
    //   }
    //   const data = await res.json()
    //   console.log(data)
    //   navigate('/home', { state: 'Thank you for your message.' })
    // } catch (err) {
    //   setError(err)
    //   dispatch({
    //     type: 'error',
    //     payload: err,
    //   })
    // }
    // dispatch({ type: 'sentRequest' })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...message }),
    })
      .then(() => navigate('/home'))
      .catch((error) => alert(error))

    dispatch({ type: 'sentRequest' })
  }

  // const netlifysend = (e) => {
  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: encode({ 'form-name': 'contact', ...this.state }),
  //   })
  //     .then(() => alert('Success!'))
  //     .catch((error) => alert(error))

  //   e.preventDefault()
  // }

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const message = {
      name: state.name,
      email: state.email,
      message: state.text,
    }

    if (formValid) {
      sendMessage(message)
      dispatch({
        type: 'updateName',
        payload: '',
      })
      dispatch({
        type: 'updateEmail',
        payload: '',
      })
      dispatch({
        type: 'updateText',
        payload: '',
      })
    } else {
      dispatch({
        type: 'nameTouched',
      })
      dispatch({
        type: 'emailTouched',
      })
      dispatch({
        type: 'textTouched',
      })
    }
  }

  return (
    <div className={classes.formsContainer}>
      {state.isSending && (
        <ScaleLoader color='white' className={classes.formLoader} />
      )}
      {!state.isSending && (
        <form name='contact' data-netlify='true' action='/home'>
          <div className={classes.formContainer}>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              name='name'
              type='text'
              minLength={3}
              value={state.name}
              placeholder='Your name'
              onChange={(e) => {
                dispatch({
                  type: 'updateName',
                  payload: e.target.value,
                })
              }}
              onBlur={() => {
                dispatch({
                  type: 'nameTouched',
                })
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
              name='email'
              value={state.email}
              onChange={(e) => {
                dispatch({
                  type: 'updateEmail',
                  payload: e.target.value,
                })
              }}
              onBlur={() => {
                dispatch({
                  type: 'emailTouched',
                })
              }}
            ></input>
            {emailError && (
              <small className={classes.errorMsg}>Enter your email.</small>
            )}
          </div>

          <div className={classes.formContainer}>
            <label htmlFor='message'>Message</label>
            <textarea
              value={state.text}
              id='message'
              name='messagge'
              placeholder='Write your message for us.'
              onChange={(e) => {
                dispatch({
                  type: 'updateText',
                  payload: e.target.value,
                })
              }}
              onBlur={() => {
                dispatch({
                  type: 'textTouched',
                })
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
  )
}
export default ContactForm
