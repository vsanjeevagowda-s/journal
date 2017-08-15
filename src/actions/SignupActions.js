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
          'email': 'venkatesh@gmail.com',
          'password': '123456789',
          'password_confirmation':'123456789',
          'code': 'C13367945D5D4C91047B3B50234AA7AB'
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
