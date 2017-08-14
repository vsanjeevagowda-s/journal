import {
  SIGNUPFORM_UPDATE,
  RESET_SIGNUP_FORM
} from '../actions/type';

const INITIAL_STATE ={
  email: '',
  password: '',
  password_confirmation: '',
  code: ''
}

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case SIGNUPFORM_UPDATE:
    return {...state, [action.payload.prop]:action.payload.value}
    case RESET_SIGNUP_FORM:
    return {...state}
    default:
    return state;
  }
}
