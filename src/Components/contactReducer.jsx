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
    case 'sendingRequest':
      return {
        ...state,
        isSending: true,
      };
    case 'sentRequest':
      return {
        ...state,
        isSending: false,
        nameTouched: false,
        emailTouched: false,
        textTouched: false,
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

export { initialState, reducer };
