import {
  SIGNUPFORM_UPDATE,
  RESET_SIGNUP_FORM
} from './type';

export const signupFormUpdate = ({prop, value}) => {
  return {
    type: SIGNUPFORM_UPDATE,
    payload: { prop, value }
  }
}

export const signupButtonPress = ({email, password, password_confirmation, code}) => {
  debugger
  return (dispatch) => {
    dispatch({type:RESET_SIGNUP_FORM})
    debugger
    fetch(`https://journal-api.herokuapp.com/api/v1/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user':{
          'email': email,
          'password': password,
          'password_confirmation':password_confirmation,
          'code': code
        }
      })
    }).then((response)=>
      response.json()
    ).then((responseJson) => {
        console.log(responseJson);
      })
    .catch((error)=>{
      console.log("This is the error",error);
    })
  };
};
