import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  text: '',
  nameTouched: false,
  emailTouched: false,
  textTouched: false,
  isSending: false,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateName':
      return {
        ...state,
        name: action.payload,
      };
      break;
    case 'updateEmail':
      return {
        ...state,
        email: action.payload,
      };
    case 'updateText':
      return {
        ...state,
        text: action.payload,
      };
    case 'nameTouched':
      return {
        ...state,
        nameTouched: true,
      };
    case 'textTouched':
      return {
        ...state,
        textTouched: true,
      };
    case 'emailTouched':
      return {
        ...state,
        emailTouched: true,
      };
    case 'sendingMsg':
      return {
        ...state,
      };
    case 'error':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
      break;
  }
};

export const [state, dispatch] = useReducer(reducer, initialState);
